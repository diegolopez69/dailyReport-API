'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('roles', [
      {
        id: 1,
        name: "user",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: "moderator",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: "admin",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
