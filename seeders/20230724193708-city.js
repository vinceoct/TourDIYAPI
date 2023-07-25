"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "cities",
      [
        {
          name: "Brooklyn",
          state: "NY",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Catskill",
          state: "NY",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kingston",
          state: "NY",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Providence",
          state: "RI",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Boston",
          state: "MA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chapel Hill",
          state: "NC",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Greenville",
          state: "SC",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Charleston",
          state: "SC",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Gainesville",
          state: "FL",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Orlando",
          state: "FL",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tallahassee",
          state: "FL",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Atlanta",
          state: "GA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Asheville",
          state: "NC",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Richmond",
          state: "VA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Baltimore",
          state: "MD",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Washington",
          state: "DC",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("states", null, {});
  },
};
