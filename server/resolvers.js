const db = require("./knex");

const resolvers = {
    Query: {
      allItems: () => {
        return db
          .select("*")
          .from("items")
          .then((data) => {
            return data;
          });
      },
    },
  };


  module.exports = resolvers;