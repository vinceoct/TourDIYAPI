'use strict';


module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "states",
      [
        {
          name: "Alabama",
          abbrev: "AL",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Alaska",
          abbrev: "AK",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Arizona",
          abbrev: "AZ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Arkansas",
          abbrev: "AR",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "California",
          abbrev: "CA",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Colorado",
          abbrev: "CO",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Connecticut",
          abbrev: "CT",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Deleware",
          abbrev: "DE",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Florida",
          abbrev: "FL",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Georgia",
          abbrev: "GA",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Hawaii",
          abbrev: "HI",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Idaho",
          abbrev: "ID",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Illinois",
          abbrev: "IL",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Indiana",
          abbrev: "IN",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Iowa",
          abbrev: "IA",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Kansas",
          abbrev: "KS",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Kentucky",
          abbrev: "KY",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Louisiana",
          abbrev: "LA",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Maine",
          abbrev: "ME",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Maryland",
          abbrev: "MD",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Massachusetts",
          abbrev: "MA",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Michigan",
          abbrev: "MI",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Minnesota",
          abbrev: "MN",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Mississippi",
          abbrev: "MS",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Missouri",
          abbrev: "MO",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Montana",
          abbrev: "MN",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Nebraska",
          abbrev: "NE",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Nevada",
          abbrev: "NV",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "New Hampshire",
          abbrev: "NH",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "New Jersey",
          abbrev: "NJ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "New Mexico",
          abbrev: "NM",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "New York",
          abbrev: "NY",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "North Carolina",
          abbrev: "NC",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "North Dakota",
          abbrev: "ND",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Ohio",
          abbrev: "OH",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Oklahoma",
          abbrev: "OK",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Oregon",
          abbrev: "OR",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Pennsylvania",
          abbrev: "PA",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Rhode Island",
          abbrev: "RI",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "South Carolina",
          abbrev: "SC",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "South Dakota",
          abbrev: "SD",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tennessee",
          abbrev: "TN",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Texas",
          abbrev: "TX",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Utah",
          abbrev: "UT",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Vermont",
          abbrev: "VT",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Virginia",
          abbrev: "VA",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Washington",
          abbrev: "WA",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Washington D.C.",
          abbrev: "DC",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "West Virginia",
          abbrev: "WV",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Wisconsin",
          abbrev: "WI",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Wyoming",
          abbrev: "WY",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
    
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('states', null, {});
  
  }
};
