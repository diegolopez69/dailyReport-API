'use strict';

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
    await queryInterface.bulkInsert('tb_checkups', [
      {
        Review: 1,
        Comments: "",
        there_is: 1,
        Works: 1,
        Theoretical_amount: 10,
        Actual_amount: 10,
        Aho_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Review: 1,
        Comments: "",
        there_is: 1,
        Works: 1,
        Theoretical_amount: 10,
        Actual_amount: 10,
        Aho_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Review: 1,
        Comments: "",
        there_is: 1,
        Works: 1,
        Theoretical_amount: 10,
        Actual_amount: 10,
        Aho_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Review: 1,
        Comments: "",
        there_is: 1,
        Works: 1,
        Theoretical_amount: 10,
        Actual_amount: 10,
        Aho_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Review: 1,
        Comments: "",
        there_is: 1,
        Works: 1,
        Theoretical_amount: 10,
        Actual_amount: 10,
        Aho_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Review: 1,
        Comments: "",
        there_is: 1,
        Works: 1,
        Aho_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Review: 1,
        Comments: "",
        there_is: 1,
        Works: 1,
        Aho_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Review: 1,
        Comments: "",
        there_is: 1,
        Works: 1,
        Aho_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Review: 1,
        Comments: "",
        there_is: 1,
        Works: 1,
        Aho_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Review: 1,
        Comments: "",
        there_is: 1,
        Works: 1,
        Aho_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        Review: 1,
        Comments: "",
        there_is: 1,
        Works: 0,
        Theoretical_amount: 10,
        Actual_amount: 10,
        Aho_id: 71,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Review: 1,
        Comments: "",
        there_is: 0,
        Works: 0,
        Theoretical_amount: 10,
        Actual_amount: 9,
        Aho_id: 72,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Review: 0,
        Comments: "No se puede revisar el aula porque están dando clases.",
        there_is:0,
        Works: 0,
        Theoretical_amount: 10,
        Actual_amount: 10,
        Aho_id: 73,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Review: 0,
        Comments: "No se puede revisar el aula porque están dando clases.",
        there_is:0,
        Works: 0,
        Theoretical_amount: 10,
        Actual_amount: 10,
        Aho_id: 74,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Review: 1,
        Comments: "",
        there_is: 0,
        Works: 0,
        Theoretical_amount: 10,
        Actual_amount: 8,
        Aho_id: 75,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Review: 1,
        Comments: "",
        there_is: 1,
        Works: 0,
        Theoretical_amount: 0,
        Actual_amount: 0,
        Aho_id: 76,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Review: 1,
        Comments: "",
        there_is: 1,
        Works: 1,
        Theoretical_amount: 0,
        Actual_amount: 0,
        Aho_id: 77,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Review: 1,
        Comments: "",
        there_is: 1,
        Works: 1,
        Theoretical_amount: 0,
        Actual_amount: 0,
        Aho_id: 78,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Review: 1,
        Comments: "",
        there_is: 1,
        Works: 1,
        Theoretical_amount: 0,
        Actual_amount: 0,
        Aho_id: 79,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Review: 1,
        Comments: "",
        there_is: 1,
        Works: 1,
        Theoretical_amount: 0,
        Actual_amount: 0,
        Aho_id: 80,
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
    await queryInterface.bulkDelete('tb_checkups', null, {});
  }
};