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
        allItems: () => {
            return db
                .select("*")
                .from("items")
                .then((data) => {
                    return data
                });
        },
    },
    Mutation: {
        addItem: (parent, args) => {
            console.log("Name:", args.name)
            return db('items')
                .insert({ name: args.name })
                .then(() => { return `${args.name} added!` })
        },
        removeItem: (parent, args) => {
            console.log("ID:", args.id)
            return db('items')
                .where({ id: args.id })
                .del()
                .then(() => { return `${args.name} removed!` })
        }
    }
};


module.exports = resolvers;