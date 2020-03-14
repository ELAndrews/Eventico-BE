const dateFormat = require("../../utils/dateFormat")

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        { organiser: 31, title: "Osterstrassenfest", date: dateFormat("2020-11-04"), location: "Easter Road, Hamburg", info: "The Osterstrasse Street Festival is the traditional launch of the street festival season in Hamburg. For one whole weekend, the entire Osterstrasse street in central Eimsbüttel is closed to traffic and brimming with activities. The festive spirit is heightened by live music on several stages, and visitors are encouraged to taste their way through the festival with its countless food trucks and mobile bars. Beer lovers won’t be disappointed at the “Bier & Genuß” stage, where they can enjoy craft beer, novel snacks and live music. Bargain hunters can’t miss the flea market — another traditional highlight. Children won’t have a chance to get bored at Unna Park, where fun activities likes face painting, duck fishing and carrousels await." },
        { organiser: 31, title: "Maskenzauber", date: dateFormat("2020-04-20"), location: "Alsterarkaden, Colonnaden and Jungfernstieg", info: "Street carnival and parade by the Alster lake." }
      ]);
    });
};
