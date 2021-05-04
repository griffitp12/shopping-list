const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
      allItems: [Item]
      allItemNames: [String]
  }

  type Item {
      name: String!
  }
`;

module.exports = typeDefs;