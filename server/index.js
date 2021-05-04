require("dotenv").config();
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const { ApolloServer } = require('apollo-server-express');
const server = new ApolloServer({ typeDefs, resolvers });

const express = require("express");
const app = express();

const path = require('path');
const publicPath = path.join(__dirname, "../dist")
console.log(publicPath);
app.use(express.static(path.resolve(publicPath)));
server.applyMiddleware({ app });

/* app.use(cors()); */

const db = require("./knex");

(async () => {
    try {
      console.log("Running migrations");
      await db.migrate.latest();
      await db.seed.run(); 
      console.log("Starting express");
      app.listen({ port: process.env.PORT || 4000 }, () =>
        console.log(
          `Express server listening on port ${process.env.PORT || 4000}`
        )
      );
    } catch (err) {
      console.error("Error starting app!", err);
      process.exit(-1);
    }
  })();
