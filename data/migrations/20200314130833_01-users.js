
exports.up = function (knex) {
    return knex.schema.createTable("users", table => {
        table.uuid();
        table.string("username", 100).unique().notNullable();
        table.string("email").unique();
        table.string("first_name");
        table.string("last_name");
        table.string("password")
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("users")
};
