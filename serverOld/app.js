const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
require("dotenv").config();

/* const cors = require("cors");
const morgan = require("morgan");
const path = require("path"); */
const db = require("./knex");

const app = express();

// SCHEMA
const typeDefs = gql`
  type Query {
    allItems: [String]
  }
`;

// RESOLVERS
const resolvers = {};

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

/* app.use(cors()); */

/* app.use(express.static(__dirname)); */

// Serve static assets
/* app.use(express.static(path.resolve(__dirname, "..", "dist"))); */

module.exports = app;
