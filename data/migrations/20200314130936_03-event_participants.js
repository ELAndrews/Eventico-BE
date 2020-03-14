
exports.up = function (knex) {
    return knex.schema.createTable("event_participants", table => {
        table.integer("participant").unsigned().notNullable().references("id").inTable("users").onUpdate("CASCADE").onDelete("CASCADE");
        table.integer("event").unsigned().notNullable().references("id").inTable("events").onUpdate("CASCADE").onDelete("CASCADE");
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("event_participants")
};
