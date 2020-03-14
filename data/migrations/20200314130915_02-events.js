
exports.up = function (knex) {
    return knex.schema.createTable("events", table => {
        table.increments();
        table.integer("organiser").unsigned().notNullable().references("id").inTable("users").onUpdate("CASCADE").onDelete("CASCADE");
        table.string("title", 255).notNullable();
        table.date("date").notNullable();
        table.string("location", 255)
        table.text("info")
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("events")
};
