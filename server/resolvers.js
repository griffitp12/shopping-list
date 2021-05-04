const db = require("./knex");

const resolvers = {
    Query: {
        allItemNames: () => {
            return db
                .select("*")
                .from("items")
                .then((data) => {
                    let dataArray = data.map(itemObj => itemObj.name)
                    return dataArray
                });
        },
    },
};


module.exports = resolvers;