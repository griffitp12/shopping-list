const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
      allItems: [Item]
      allItemNames: [String]
  }

  type Item {
      name: String!
      id: Int!
  }

  type Mutation {
     addItem(name: String!): String
     removeItem(id: Int! name: String!): String
  }
`;

module.exports = typeDefs;