'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert('tb_inventories', [
      {
        Classroom_id: 1,
        Computer_id: 1,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 1,
        Computer_id: 1,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 1,
        Computer_id: 1,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 1,
        Computer_id: 1,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 1,
        Computer_id: 1,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 1,
        Computer_id: 1,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 1,
        Computer_id: 1,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 1,
        Computer_id: 1,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 1,
        Computer_id: 1,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 1,
        Computer_id: 1,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },


      /*---------------------Classroom -2,2--------------------- */

      {
        Classroom_id: 2,
        Computer_id: 2,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 2,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 2,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 2,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 2,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 2,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 2,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 2,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 2,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 2,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 3,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 3,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 3,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 3,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 3,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 3,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 3,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 3,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 3,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 3,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 4,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 4,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 4,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 4,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 4,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 4,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 4,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 4,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 4,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 4,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 5,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 5,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 5,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 5,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 5,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 5,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 5,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 5,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 5,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 5,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 6,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 6,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 6,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 6,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 6,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 6,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 6,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 6,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 6,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 6,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 7,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 7,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 7,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 7,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 7,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 7,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 7,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 7,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 7,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 2,
        Computer_id: 7,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      /*------------------------------------------------------------------------------------ */

      {
        Classroom_id: 3,
        Computer_id: 8,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 3,
        Computer_id: 8,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 3,
        Computer_id: 8,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 3,
        Computer_id: 8,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 3,
        Computer_id: 8,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 3,
        Computer_id: 8,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 3,
        Computer_id: 8,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 3,
        Computer_id: 8,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 3,
        Computer_id: 8,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 3,
        Computer_id: 8,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },


      /*---------------------Classroom -2,4--------------------- */

      {
        Classroom_id: 4,
        Computer_id: 9,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 9,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 9,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 9,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 9,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 9,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 9,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 9,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 9,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 9,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 10,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 10,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 10,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 10,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 10,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 10,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 10,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 10,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 10,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 10,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 11,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 11,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 11,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 11,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 11,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 11,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 11,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 11,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 11,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 11,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 12,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 12,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 12,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 12,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 12,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 12,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 12,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 12,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 12,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 12,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 13,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 13,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 13,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 13,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 13,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 13,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 13,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 13,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 13,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 13,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 14,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 14,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 14,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 14,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 14,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 14,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 14,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 14,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 14,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 4,
        Computer_id: 14,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      /*------------------------------------------------------------------------------------ */

      {
        Classroom_id: 5,
        Computer_id: 15,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 5,
        Computer_id: 15,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 5,
        Computer_id: 15,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 5,
        Computer_id: 15,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 5,
        Computer_id: 15,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 5,
        Computer_id: 15,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 5,
        Computer_id: 15,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 5,
        Computer_id: 15,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 5,
        Computer_id: 15,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 5,
        Computer_id: 15,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },


      /*---------------------Classroom -2,6--------------------- */
      {
        Classroom_id: 6,
        Computer_id: 16,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 16,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 16,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 16,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 16,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 16,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 16,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 16,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 16,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 16,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 17,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 17,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 17,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 17,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 17,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 17,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 17,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 17,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 17,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 17,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 18,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 18,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 18,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 18,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 18,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 18,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 18,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 18,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 18,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 18,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 19,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 19,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 19,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 19,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 19,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 19,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 19,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 19,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 19,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 19,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 20,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 20,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 20,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 20,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 20,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 20,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 20,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 20,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 20,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 20,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 21,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 21,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 21,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 21,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 21,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 21,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 21,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 21,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 21,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 6,
        Computer_id: 21,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      /*------------------------------------------------------------------------------------ */

      {
        Classroom_id: 7,
        Computer_id: 22,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 7,
        Computer_id: 22,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 7,
        Computer_id: 22,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 7,
        Computer_id: 22,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 7,
        Computer_id: 22,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 7,
        Computer_id: 22,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 7,
        Computer_id: 22,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 7,
        Computer_id: 22,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 7,
        Computer_id: 22,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 7,
        Computer_id: 22,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 8,
        Computer_id: 23,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 8,
        Computer_id: 23,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 8,
        Computer_id: 23,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 8,
        Computer_id: 23,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 8,
        Computer_id: 23,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 8,
        Computer_id: 23,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 8,
        Computer_id: 23,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 8,
        Computer_id: 23,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 8,
        Computer_id: 23,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 8,
        Computer_id: 23,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 9,
        Computer_id: 24,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 9,
        Computer_id: 24,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 9,
        Computer_id: 24,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 9,
        Computer_id: 24,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 9,
        Computer_id: 24,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 9,
        Computer_id: 24,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 9,
        Computer_id: 24,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 9,
        Computer_id: 24,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 9,
        Computer_id: 24,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 9,
        Computer_id: 24,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 10,
        Computer_id: 25,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 10,
        Computer_id: 25,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 10,
        Computer_id: 25,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 10,
        Computer_id: 25,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 10,
        Computer_id: 25,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 10,
        Computer_id: 25,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 10,
        Computer_id: 25,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 10,
        Computer_id: 25,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 10,
        Computer_id: 25,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 10,
        Computer_id: 25,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 11,
        Computer_id: 26,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 11,
        Computer_id: 26,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 11,
        Computer_id: 26,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 11,
        Computer_id: 26,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 11,
        Computer_id: 26,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 11,
        Computer_id: 26,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 11,
        Computer_id: 26,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 11,
        Computer_id: 26,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 11,
        Computer_id: 26,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 11,
        Computer_id: 26,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 12,
        Computer_id: 27,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 12,
        Computer_id: 27,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 12,
        Computer_id: 27,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 12,
        Computer_id: 27,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 12,
        Computer_id: 27,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 12,
        Computer_id: 27,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 12,
        Computer_id: 27,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 12,
        Computer_id: 27,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 12,
        Computer_id: 27,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 12,
        Computer_id: 27,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 13,
        Computer_id: 28,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 13,
        Computer_id: 28,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 13,
        Computer_id: 28,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 13,
        Computer_id: 28,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 13,
        Computer_id: 28,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 13,
        Computer_id: 28,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 13,
        Computer_id: 28,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 13,
        Computer_id: 28,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 13,
        Computer_id: 28,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 13,
        Computer_id: 28,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 14,
        Computer_id: 29,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 14,
        Computer_id: 29,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 14,
        Computer_id: 29,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 14,
        Computer_id: 29,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 14,
        Computer_id: 29,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 14,
        Computer_id: 29,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 14,
        Computer_id: 29,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 14,
        Computer_id: 29,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 14,
        Computer_id: 29,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 14,
        Computer_id: 29,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 15,
        Computer_id: 30,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 15,
        Computer_id: 30,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 15,
        Computer_id: 30,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 15,
        Computer_id: 30,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 15,
        Computer_id: 30,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 15,
        Computer_id: 30,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 15,
        Computer_id: 30,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 15,
        Computer_id: 30,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 15,
        Computer_id: 30,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 15,
        Computer_id: 30,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 16,
        Computer_id: 31,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 16,
        Computer_id: 31,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 16,
        Computer_id: 31,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 16,
        Computer_id: 31,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 16,
        Computer_id: 31,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 16,
        Computer_id: 31,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 16,
        Computer_id: 31,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 16,
        Computer_id: 31,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 16,
        Computer_id: 31,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 16,
        Computer_id: 31,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 17,
        Computer_id: 22,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 17,
        Computer_id: 22,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 17,
        Computer_id: 22,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 17,
        Computer_id: 22,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 17,
        Computer_id: 22,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 17,
        Computer_id: 22,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 17,
        Computer_id: 22,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 17,
        Computer_id: 22,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 17,
        Computer_id: 22,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 17,
        Computer_id: 22,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 18,
        Computer_id: 23,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 18,
        Computer_id: 23,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 18,
        Computer_id: 23,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 18,
        Computer_id: 23,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 18,
        Computer_id: 23,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 18,
        Computer_id: 23,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 18,
        Computer_id: 23,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 18,
        Computer_id: 23,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 18,
        Computer_id: 23,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 18,
        Computer_id: 23,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 19,
        Computer_id: 24,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 19,
        Computer_id: 24,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 19,
        Computer_id: 24,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 19,
        Computer_id: 24,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 19,
        Computer_id: 24,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 19,
        Computer_id: 24,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 19,
        Computer_id: 24,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 19,
        Computer_id: 24,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 19,
        Computer_id: 24,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 19,
        Computer_id: 24,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 20,
        Computer_id: 25,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 20,
        Computer_id: 25,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 20,
        Computer_id: 25,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 20,
        Computer_id: 25,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 20,
        Computer_id: 25,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 20,
        Computer_id: 25,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 20,
        Computer_id: 25,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 20,
        Computer_id: 25,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 20,
        Computer_id: 25,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 20,
        Computer_id: 25,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 21,
        Computer_id: 26,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 21,
        Computer_id: 26,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 21,
        Computer_id: 26,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 21,
        Computer_id: 26,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 21,
        Computer_id: 26,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 21,
        Computer_id: 26,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 21,
        Computer_id: 26,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 21,
        Computer_id: 26,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 21,
        Computer_id: 26,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 21,
        Computer_id: 26,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 22,
        Computer_id: 27,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 22,
        Computer_id: 27,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 22,
        Computer_id: 27,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 22,
        Computer_id: 27,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 22,
        Computer_id: 27,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 22,
        Computer_id: 27,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 22,
        Computer_id: 27,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 22,
        Computer_id: 27,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 22,
        Computer_id: 27,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 22,
        Computer_id: 27,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 23,
        Computer_id: 28,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 23,
        Computer_id: 28,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 23,
        Computer_id: 28,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 23,
        Computer_id: 28,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 23,
        Computer_id: 28,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 23,
        Computer_id: 28,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 23,
        Computer_id: 28,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 23,
        Computer_id: 28,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 23,
        Computer_id: 28,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 23,
        Computer_id: 28,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 24,
        Computer_id: 29,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 24,
        Computer_id: 29,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 24,
        Computer_id: 29,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 24,
        Computer_id: 29,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 24,
        Computer_id: 29,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 24,
        Computer_id: 29,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 24,
        Computer_id: 29,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 24,
        Computer_id: 29,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 24,
        Computer_id: 29,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 24,
        Computer_id: 29,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 25,
        Computer_id: 30,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 25,
        Computer_id: 30,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 25,
        Computer_id: 30,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 25,
        Computer_id: 30,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 25,
        Computer_id: 30,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 25,
        Computer_id: 30,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 25,
        Computer_id: 30,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 25,
        Computer_id: 30,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 25,
        Computer_id: 30,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 25,
        Computer_id: 30,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 26,
        Computer_id: 31,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 26,
        Computer_id: 31,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 26,
        Computer_id: 31,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 26,
        Computer_id: 31,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 26,
        Computer_id: 31,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 26,
        Computer_id: 31,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 26,
        Computer_id: 31,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 26,
        Computer_id: 31,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 26,
        Computer_id: 31,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 26,
        Computer_id: 31,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 27,
        Computer_id: 22,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 27,
        Computer_id: 22,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 27,
        Computer_id: 22,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 27,
        Computer_id: 22,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 27,
        Computer_id: 22,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 27,
        Computer_id: 22,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 27,
        Computer_id: 22,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 27,
        Computer_id: 22,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 27,
        Computer_id: 22,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 27,
        Computer_id: 22,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 28,
        Computer_id: 23,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 28,
        Computer_id: 23,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 28,
        Computer_id: 23,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 28,
        Computer_id: 23,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 28,
        Computer_id: 23,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 28,
        Computer_id: 23,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 28,
        Computer_id: 23,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 28,
        Computer_id: 23,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 28,
        Computer_id: 23,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 28,
        Computer_id: 23,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 29,
        Computer_id: 24,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 29,
        Computer_id: 24,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 29,
        Computer_id: 24,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 29,
        Computer_id: 24,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 29,
        Computer_id: 24,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 29,
        Computer_id: 24,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 29,
        Computer_id: 24,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 29,
        Computer_id: 24,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 29,
        Computer_id: 24,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 29,
        Computer_id: 24,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 30,
        Computer_id: 25,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 30,
        Computer_id: 25,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 30,
        Computer_id: 25,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 30,
        Computer_id: 25,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 30,
        Computer_id: 25,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 30,
        Computer_id: 25,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 30,
        Computer_id: 25,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 30,
        Computer_id: 25,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 30,
        Computer_id: 25,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 30,
        Computer_id: 25,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 30,
        Computer_id: 26,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 30,
        Computer_id: 26,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 30,
        Computer_id: 26,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 30,
        Computer_id: 26,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 30,
        Computer_id: 26,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 30,
        Computer_id: 26,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 30,
        Computer_id: 26,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 30,
        Computer_id: 26,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 30,
        Computer_id: 26,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 30,
        Computer_id: 26,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        Classroom_id: 31,
        Computer_id: 30,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 31,
        Computer_id: 30,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 31,
        Computer_id: 30,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 31,
        Computer_id: 30,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 31,
        Computer_id: 30,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 31,
        Computer_id: 30,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 31,
        Computer_id: 30,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 31,
        Computer_id: 30,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 31,
        Computer_id: 30,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 31,
        Computer_id: 30,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 32,
        Computer_id: 31,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 32,
        Computer_id: 31,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 32,
        Computer_id: 31,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 32,
        Computer_id: 31,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 32,
        Computer_id: 31,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 32,
        Computer_id: 31,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 32,
        Computer_id: 31,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 32,
        Computer_id: 31,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 32,
        Computer_id: 31,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 32,
        Computer_id: 31,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 33,
        Computer_id: 22,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 33,
        Computer_id: 22,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 33,
        Computer_id: 22,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 33,
        Computer_id: 22,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 33,
        Computer_id: 22,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 33,
        Computer_id: 22,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 33,
        Computer_id: 22,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 33,
        Computer_id: 22,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 33,
        Computer_id: 22,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 33,
        Computer_id: 22,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 34,
        Computer_id: 23,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 34,
        Computer_id: 23,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 34,
        Computer_id: 23,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 34,
        Computer_id: 23,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 34,
        Computer_id: 23,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 34,
        Computer_id: 23,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 34,
        Computer_id: 23,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 34,
        Computer_id: 23,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 34,
        Computer_id: 23,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 34,
        Computer_id: 23,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 35,
        Computer_id: 24,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 35,
        Computer_id: 24,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 35,
        Computer_id: 24,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 35,
        Computer_id: 24,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 35,
        Computer_id: 24,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 35,
        Computer_id: 24,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 35,
        Computer_id: 24,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 35,
        Computer_id: 24,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 35,
        Computer_id: 24,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 35,
        Computer_id: 24,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 36,
        Computer_id: 25,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 36,
        Computer_id: 25,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 36,
        Computer_id: 25,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 36,
        Computer_id: 25,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 36,
        Computer_id: 25,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 36,
        Computer_id: 25,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 36,
        Computer_id: 25,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 36,
        Computer_id: 25,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 36,
        Computer_id: 25,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 36,
        Computer_id: 25,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 37,
        Computer_id: 26,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 37,
        Computer_id: 26,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 37,
        Computer_id: 26,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 37,
        Computer_id: 26,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 37,
        Computer_id: 26,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 37,
        Computer_id: 26,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 37,
        Computer_id: 26,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 37,
        Computer_id: 26,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 37,
        Computer_id: 26,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 37,
        Computer_id: 26,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 38,
        Computer_id: 27,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 38,
        Computer_id: 27,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 38,
        Computer_id: 27,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 38,
        Computer_id: 27,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 38,
        Computer_id: 27,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 38,
        Computer_id: 27,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 38,
        Computer_id: 27,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 38,
        Computer_id: 27,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 38,
        Computer_id: 27,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 38,
        Computer_id: 27,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 39,
        Computer_id: 28,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 39,
        Computer_id: 28,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 39,
        Computer_id: 28,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 39,
        Computer_id: 28,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 39,
        Computer_id: 28,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 39,
        Computer_id: 28,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 39,
        Computer_id: 28,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 39,
        Computer_id: 28,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 39,
        Computer_id: 28,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 39,
        Computer_id: 28,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 40,
        Computer_id: 29,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 40,
        Computer_id: 29,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 40,
        Computer_id: 29,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 40,
        Computer_id: 29,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 40,
        Computer_id: 29,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 40,
        Computer_id: 29,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 40,
        Computer_id: 29,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 40,
        Computer_id: 29,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 40,
        Computer_id: 29,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 40,
        Computer_id: 29,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 41,
        Computer_id: 30,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 41,
        Computer_id: 30,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 41,
        Computer_id: 30,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 41,
        Computer_id: 30,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 41,
        Computer_id: 30,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 41,
        Computer_id: 30,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 41,
        Computer_id: 30,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 41,
        Computer_id: 30,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 41,
        Computer_id: 30,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 41,
        Computer_id: 30,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 42,
        Computer_id: 31,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 42,
        Computer_id: 31,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 42,
        Computer_id: 31,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 42,
        Computer_id: 31,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 42,
        Computer_id: 31,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 42,
        Computer_id: 31,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 42,
        Computer_id: 31,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 42,
        Computer_id: 31,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 42,
        Computer_id: 31,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 42,
        Computer_id: 31,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 43,
        Computer_id: 22,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 43,
        Computer_id: 22,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 43,
        Computer_id: 22,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 43,
        Computer_id: 22,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 43,
        Computer_id: 22,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 43,
        Computer_id: 22,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 43,
        Computer_id: 22,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 43,
        Computer_id: 22,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 43,
        Computer_id: 22,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 43,
        Computer_id: 22,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 44,
        Computer_id: 23,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 44,
        Computer_id: 23,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 44,
        Computer_id: 23,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 44,
        Computer_id: 23,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 44,
        Computer_id: 23,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 44,
        Computer_id: 23,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 44,
        Computer_id: 23,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 44,
        Computer_id: 23,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 44,
        Computer_id: 23,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 44,
        Computer_id: 23,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 45,
        Computer_id: 24,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 45,
        Computer_id: 24,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 45,
        Computer_id: 24,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 45,
        Computer_id: 24,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 45,
        Computer_id: 24,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 45,
        Computer_id: 24,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 45,
        Computer_id: 24,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 45,
        Computer_id: 24,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 45,
        Computer_id: 24,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 45,
        Computer_id: 24,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 45,
        Computer_id: 25,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 45,
        Computer_id: 25,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 45,
        Computer_id: 25,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 45,
        Computer_id: 25,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 45,
        Computer_id: 25,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 45,
        Computer_id: 25,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 45,
        Computer_id: 25,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 45,
        Computer_id: 25,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 45,
        Computer_id: 25,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 45,
        Computer_id: 25,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 45,
        Computer_id: 26,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 45,
        Computer_id: 26,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 45,
        Computer_id: 26,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 45,
        Computer_id: 26,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 45,
        Computer_id: 26,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 45,
        Computer_id: 26,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 45,
        Computer_id: 26,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 45,
        Computer_id: 26,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 45,
        Computer_id: 26,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 45,
        Computer_id: 26,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 46,
        Computer_id: 30,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 46,
        Computer_id: 30,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 46,
        Computer_id: 30,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 46,
        Computer_id: 30,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 46,
        Computer_id: 30,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 46,
        Computer_id: 30,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 46,
        Computer_id: 30,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 46,
        Computer_id: 30,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 46,
        Computer_id: 30,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 46,
        Computer_id: 30,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 47,
        Computer_id: 31,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 47,
        Computer_id: 31,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 47,
        Computer_id: 31,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 47,
        Computer_id: 31,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 47,
        Computer_id: 31,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 47,
        Computer_id: 31,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 47,
        Computer_id: 31,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 47,
        Computer_id: 31,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 47,
        Computer_id: 31,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 47,
        Computer_id: 31,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 48,
        Computer_id: 22,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 48,
        Computer_id: 22,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 48,
        Computer_id: 22,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 48,
        Computer_id: 22,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 48,
        Computer_id: 22,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 48,
        Computer_id: 22,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 48,
        Computer_id: 22,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 48,
        Computer_id: 22,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 48,
        Computer_id: 22,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 48,
        Computer_id: 22,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 49,
        Computer_id: 23,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 49,
        Computer_id: 23,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 49,
        Computer_id: 23,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 49,
        Computer_id: 23,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 49,
        Computer_id: 23,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 49,
        Computer_id: 23,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 49,
        Computer_id: 23,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 49,
        Computer_id: 23,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 49,
        Computer_id: 23,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 49,
        Computer_id: 23,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 50,
        Computer_id: 24,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 50,
        Computer_id: 24,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 50,
        Computer_id: 24,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 50,
        Computer_id: 24,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 50,
        Computer_id: 24,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 50,
        Computer_id: 24,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 50,
        Computer_id: 24,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 50,
        Computer_id: 24,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 50,
        Computer_id: 24,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 50,
        Computer_id: 24,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 51,
        Computer_id: 25,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 51,
        Computer_id: 25,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 51,
        Computer_id: 25,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 51,
        Computer_id: 25,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 51,
        Computer_id: 25,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 51,
        Computer_id: 25,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 51,
        Computer_id: 25,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 51,
        Computer_id: 25,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 51,
        Computer_id: 25,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 51,
        Computer_id: 25,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 52,
        Computer_id: 26,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 52,
        Computer_id: 26,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 52,
        Computer_id: 26,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 52,
        Computer_id: 26,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 52,
        Computer_id: 26,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 52,
        Computer_id: 26,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 52,
        Computer_id: 26,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 52,
        Computer_id: 26,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 52,
        Computer_id: 26,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 52,
        Computer_id: 26,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 53,
        Computer_id: 27,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 53,
        Computer_id: 27,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 53,
        Computer_id: 27,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 53,
        Computer_id: 27,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 53,
        Computer_id: 27,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 53,
        Computer_id: 27,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 53,
        Computer_id: 27,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 53,
        Computer_id: 27,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 53,
        Computer_id: 27,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 53,
        Computer_id: 27,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 54,
        Computer_id: 28,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 54,
        Computer_id: 28,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 54,
        Computer_id: 28,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 54,
        Computer_id: 28,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 54,
        Computer_id: 28,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 54,
        Computer_id: 28,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 54,
        Computer_id: 28,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 54,
        Computer_id: 28,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 54,
        Computer_id: 28,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 54,
        Computer_id: 28,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 55,
        Computer_id: 29,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 55,
        Computer_id: 29,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 55,
        Computer_id: 29,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 55,
        Computer_id: 29,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 55,
        Computer_id: 29,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 55,
        Computer_id: 29,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 55,
        Computer_id: 29,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 55,
        Computer_id: 29,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 55,
        Computer_id: 29,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 55,
        Computer_id: 29,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 56,
        Computer_id: 30,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 56,
        Computer_id: 30,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 56,
        Computer_id: 30,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 56,
        Computer_id: 30,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 56,
        Computer_id: 30,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 56,
        Computer_id: 30,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 56,
        Computer_id: 30,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 56,
        Computer_id: 30,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 56,
        Computer_id: 30,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 56,
        Computer_id: 30,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 57,
        Computer_id: 31,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 57,
        Computer_id: 31,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 57,
        Computer_id: 31,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 57,
        Computer_id: 31,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 57,
        Computer_id: 31,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 57,
        Computer_id: 31,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 57,
        Computer_id: 31,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 57,
        Computer_id: 31,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 57,
        Computer_id: 31,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 57,
        Computer_id: 31,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 58,
        Computer_id: 22,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 58,
        Computer_id: 22,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 58,
        Computer_id: 22,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 58,
        Computer_id: 22,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 58,
        Computer_id: 22,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 58,
        Computer_id: 22,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 58,
        Computer_id: 22,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 58,
        Computer_id: 22,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 58,
        Computer_id: 22,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 58,
        Computer_id: 22,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 59,
        Computer_id: 23,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 59,
        Computer_id: 23,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 59,
        Computer_id: 23,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 59,
        Computer_id: 23,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 59,
        Computer_id: 23,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 59,
        Computer_id: 23,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 59,
        Computer_id: 23,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 59,
        Computer_id: 23,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 59,
        Computer_id: 23,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 59,
        Computer_id: 23,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 60,
        Computer_id: 24,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 60,
        Computer_id: 24,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 60,
        Computer_id: 24,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 60,
        Computer_id: 24,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 60,
        Computer_id: 24,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 60,
        Computer_id: 24,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 60,
        Computer_id: 24,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 60,
        Computer_id: 24,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 60,
        Computer_id: 24,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 60,
        Computer_id: 24,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 60,
        Computer_id: 25,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 60,
        Computer_id: 25,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 60,
        Computer_id: 25,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 60,
        Computer_id: 25,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 60,
        Computer_id: 25,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 60,
        Computer_id: 25,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 60,
        Computer_id: 25,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 60,
        Computer_id: 25,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 60,
        Computer_id: 25,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 60,
        Computer_id: 25,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 60,
        Computer_id: 26,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 60,
        Computer_id: 26,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 60,
        Computer_id: 26,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 60,
        Computer_id: 26,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 60,
        Computer_id: 26,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 60,
        Computer_id: 26,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 60,
        Computer_id: 26,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 60,
        Computer_id: 26,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 60,
        Computer_id: 26,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 60,
        Computer_id: 26,
        Tool_id: 10,
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
    await queryInterface.bulkDelete('tb_inventories', null, {});

  }
};
