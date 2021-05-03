exports.up = function (knex) {
    return knex.schema.createTable("items", (table) => {
        table.increments().index();

        table.text("item")
    });
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists("items");
};
