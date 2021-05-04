exports.up = function (knex) {
    return knex.schema.createTable("items", (table) => {
        table.increments().index();

        table.text("name").notNullable();
    });
}

exports.down = function (knex,) {
    return knex.schema.dropTableIfExists("items");
};
