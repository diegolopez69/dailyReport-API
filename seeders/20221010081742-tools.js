'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert('tb_tools', [
      {
        Type: "Hardware",
        Name: "Cable ethernet",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Type: "Hardware",
        Name: "Cable de poder", createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Type: "Hardware",
        Name: "Teclado",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Type: "Hardware",
        Name: "Ratón",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Type: "Hardware",
        Name: "HDMI",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Type: "Software",
        Name: "Paquete Office",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Type: "Software",
        Name: "Windows 10 activo",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Type: "Software",
        Name: "Adobe Reader",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Type: "Software",
        Name: "Winrar",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Type: "Software",
        Name: "Google Chrome",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('tb_tools', null, {});
  }
};