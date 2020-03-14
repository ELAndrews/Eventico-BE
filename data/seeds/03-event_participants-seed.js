
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('event_participants').del()
    .then(function () {
      // Inserts seed entries
      return knex('event_participants').insert([
        { participant: 2, event: 1 },
        { participant: 2, event: 2 },
        { participant: 3, event: 1 },
        { participant: 4, event: 2 },
        { participant: 5, event: 1 },
        { participant: 5, event: 2 }
      ]);
    });
};
