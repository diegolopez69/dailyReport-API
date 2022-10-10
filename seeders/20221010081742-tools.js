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
        Tipo: "Hardware",
        Nombre: "Cable ethernet",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Tipo: "Hardware",
        Nombre: "Cable de poder", createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Tipo: "Hardware",
        Nombre: "Teclado",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Tipo: "Hardware",
        Nombre: "Ratón",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Tipo: "Hardware",
        Nombre: "HDMI",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Tipo: "Software",
        Nombre: "Word",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Tipo: "Software",
        Nombre: "Powerpoint",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Tipo: "Software",
        Nombre: "Excel",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Tipo: "Software",
        Nombre: "Windows 10 activo",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Tipo: "Software",
        Nombre: "Adobe Reader",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Tipo: "Software",
        Nombre: "Winrar",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Tipo: "Software",
        Nombre: "Google Chrome",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Tipo: "Software",
        Nombre: "Firefox",
        createdAt: new Date(),
        updatedAt: new Date()
      },
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