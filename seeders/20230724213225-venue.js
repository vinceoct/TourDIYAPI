'use strict';


module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
        "venues",
        [
          {
            name: "The Kingsland",
            city: 'Brooklyn',
            state: 'NY',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Avalon Lounge",
            city: 'Catskill',
            state: 'NY',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "The Linda",
            city: 'Albany',
            state: 'NY',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Alchemy",
            city: 'Providence',
            state: 'RI',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Middle East",
            city: 'Boston',
            state: 'MA',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Local 506",
            city: 'Chapel Hill',
            state: 'NC',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "The Velo Fellow",
            city: 'Greenville',
            state: 'SC',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Tin Roof",
            city: 'Charelston',
            state: 'SC',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Vecinos",
            city: 'Gainesville',
            state: 'FL',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Will's Pub",
            city: 'Orlando',
            state: 'FL',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "The Bark",
            city: 'Tallahassee',
            state: 'FL',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Boggs Social & Supply",
            city: 'Atlanta',
            state: 'GA',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Static Age Recordsd",
            city: 'Asheville',
            state: 'NC',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Garden Grove",
            city: 'Richmond',
            state: 'VA',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "The Crown",
            city: 'Baltimore',
            state: 'MD',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Quarry House",
            city: 'Washington DC',
            state: 'DC',
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
