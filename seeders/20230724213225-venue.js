'use strict';


module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
        "venues",
        [
          {
            name: "The Kingsland",
            cityId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Avalon Lounge",
            cityId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "The Linda",
            cityId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Alchemy",
            cityId: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Middle East",
            cityId: 5,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Local 506",
            cityId: 6,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "The Velo Fellow",
            cityId: 7,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Tin Roof",
            cityId: 8,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Vecinos",
            cityId: 9,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Will's Pub",
            cityId: 10,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "The Bark",
            cityId: 11,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Boggs Social & Supply",
            cityId: 12,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Static Age Recordsd",
            cityId: 13,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Garden Grove",
            cityId: 14,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "The Crown",
            cityId: 15,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Quarry House",
            cityId: 16,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {}
      );
   
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('venues', null, {});
     
  }
};
