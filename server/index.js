require("dotenv").config();
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });


const express = require("express");
const app = express();
const db = require("./knex");



(async () => {
    try {
      console.log("Running migrations");
      await db.migrate.latest();
      await db.seed.run(); 
      console.log("Starting express");
      server.listen({ port: process.env.PORT || 4000 }, () =>
        console.log(
          `Express server listening on port ${process.env.PORT || 4000}`
        )
      );
    } catch (err) {
      console.error("Error starting app!", err);
      process.exit(-1);
    }
  })();
