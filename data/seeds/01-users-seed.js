const bcrypt = require("bcrypt")

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: "Ewallace", email: "emmawallace1990@hotmail.com", first_name: "Emma", last_name: "Wallace", password: bcrypt.hashSync('password', 14) },
        { username: "Matt", first_name: "Matt" },
        { username: "JJ", first_name: "James", last_name: "Johnson" },
        { username: "SonnyBumble" },
        { username: "NiklasB", email: "emmaandrews1990@hotmail.com", first_name: "Niklas", last_name: "Becker", password: bcrypt.hashSync('password', 14) }
      ]);
    });
};
