"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     *
     * 1 = Si
     *
     */
    await queryInterface.bulkInsert(
      "tb_checkups",
      [
        /*---------------------Not Check--------------------- */
        {
          Review: 0,
          Comments: "No se pudo revisar el aula porque habían clases.",
          there_is: 0,
          Works: 0,
          Theoretical_amount: 1,
          Actual_amount: 1,
          Inventory_id: 1,
          Classroom_id: 31,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete("tb_checkups", null, {});
  },
};