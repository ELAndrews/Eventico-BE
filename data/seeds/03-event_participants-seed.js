
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('event_participants').del()
    .then(function () {
      // Inserts seed entries
      return knex('event_participants').insert([
        { participant: 32, event: 17 },
        { participant: 32, event: 18 },
        { participant: 33, event: 17 },
        { participant: 34, event: 18 },
        { participant: 35, event: 17 },
        { participant: 35, event: 18 }
      ]);
    });
};
