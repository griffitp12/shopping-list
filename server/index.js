require("dotenv").config();
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const { ApolloServer } = require('apollo-server-express');
const server = new ApolloServer({ typeDefs, resolvers });

const express = require("express");
app.use(express.static("../public"));
const app = express();

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
