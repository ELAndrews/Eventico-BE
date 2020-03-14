const dateFormat = require("../../utils/dateFormat")

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        { organiser: "", title: "", date: dateFormat("2020-11-04"), info: "" },
        { organiser: "", title: "", date: dateFormat("2020-04-20"), info: "" }
      ]);
    });
};
