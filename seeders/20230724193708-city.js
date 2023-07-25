"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "cities",
      [
        {
          name: "Brooklyn",
          stateId: 33,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Catskill",
          stateId: 33,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Albany",
          stateId: 33,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Providence",
          stateId: 40,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Boston",
          stateId: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chapel Hill",
          stateId: 34,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Greenville",
          stateId: 41,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Charleston",
          stateId: 41,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Gainesville",
          stateId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Orlando",
          stateId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tallahassee",
          stateId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Atlanta",
          stateId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Asheville",
          stateId: 34,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Richmond",
          stateId: 47,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Baltimore",
          stateId: 21,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Washington",
          stateId: 49,
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
