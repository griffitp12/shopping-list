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
    Mutation: {
        addItem: (parent, args) => {
            return db('items')
                .insert({ name: args.name })
                .then(() => { return `${args.name} added!` })
        },
        removeItem: (parent, args) => {
            return db('items')
                .where({ name: args.name })
                .del()
                .then(() => { return `${args.name} removed!` })
        }
    }
};


module.exports = resolvers;