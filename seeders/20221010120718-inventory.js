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
      /*---------------------Classroom 0,1--------------------- */
      {
        Classroom_id: 31,
        Computer_id: 1,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 31,
        Computer_id: 1,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 31,
        Computer_id: 1,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 31,
        Computer_id: 1,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 31,
        Computer_id: 1,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 31,
        Computer_id: 1,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 31,
        Computer_id: 1,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 31,
        Computer_id: 1,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 31,
        Computer_id: 1,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 31,
        Computer_id: 1,
        Tool_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      /*---------------------Classroom 0,2--------------------- */
      {
        Classroom_id: 32,
        Computer_id: 1,
        Tool_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 32,
        Computer_id: 1,
        Tool_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 32,
        Computer_id: 1,
        Tool_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 32,
        Computer_id: 1,
        Tool_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 32,
        Computer_id: 1,
        Tool_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 32,
        Computer_id: 1,
        Tool_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 32,
        Computer_id: 1,
        Tool_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 32,
        Computer_id: 1,
        Tool_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 32,
        Computer_id: 1,
        Tool_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Classroom_id: 32,
        Computer_id: 1,
        Tool_id: 10,
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
    await queryInterface.bulkDelete('tb_inventories', null, {});

  }
};
