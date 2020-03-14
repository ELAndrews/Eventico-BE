
exports.up = function (knex) {
    return knex.schema.createTable("events", table => {
        table.uuid();
        table.integer("organiser").unsigned().notNullable().references("id").inTable("users").onUpdate("CASCADE").onDelete("CASCADE");
        table.string("title", 255).notNullable();
        table.date("date").notNullable();
        table.text("info")
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("events")
};
