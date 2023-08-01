'use strict';


module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "venues",
      [
        {
          name: "The Kingsland",
          city: "Brooklyn",
          state: "NY",
          website: "http://kingslandbk.com/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Avalon Lounge",
          city: "Catskill",
          state: "NY",
          website: "https://www.theavalonlounge.com/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The Linda",
          city: "Albany",
          state: "NY",
          website: "https://www.thelinda.org/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Alchemy",
          city: "Providence",
          state: "RI",
          website: "https://alchemyri.net/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Middle East",
          city: "Boston",
          state: "MA",
          website: "https://www.mideastoffers.com/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Local 506",
          city: "Chapel Hill",
          state: "NC",
          website: "https://local506.com/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The Velo Fellow",
          city: "Greenville",
          state: "SC",
          website: "https://www.thevelofellow.com/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tin Roof",
          city: "Charelston",
          state: "SC",
          website: "https://charlestontinroof.com/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vecinos",
          city: "Gainesville",
          state: "FL",
          website: "https://www.vecinosgnv.com/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Will's Pub",
          city: "Orlando",
          state: "FL",
          website: "https://willspub.org/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The Bark",
          city: "Tallahassee",
          state: "FL",
          website: "https://thebarkfl.square.site/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Boggs Social & Supply",
          city: "Atlanta",
          state: "GA",
          website: "https://www.boggssocial.com/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Static Age Recordsd",
          city: "Asheville",
          state: "NC",
          website: "https://www.facebook.com/static.agerecords.7/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Garden Grove",
          city: "Richmond",
          state: "VA",
          website: "https://www.gardengrovebrewing.com/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The Crown",
          city: "Baltimore",
          state: "MD",
          website: "https://www.thecrownbaltimore.com/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Quarry House",
          city: "Washington DC",
          state: "DC",
          website: "https://www.quarryhousetavern.com/",

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
