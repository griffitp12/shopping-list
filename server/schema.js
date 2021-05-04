const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
      allItems: [Item]
  }

  type Item {
      name: String!
  }
`;

module.exports = typeDefs;