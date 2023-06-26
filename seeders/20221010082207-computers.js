"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert(
      "tb_computers",
        [
          {
            Name: "PC-001",
            Serie: "QC3Y23LV12",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            Name: "PC-002",
            Serie: "Y4AXYFPZPO",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            Name: "PC-003",
            Serie: "4HY8NU8SIQ",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            Name: "PC-004",
            Serie: "IMFM4AKP7K",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            Name: "PC-005",
            Serie: "KQ3D9GL6XS",
            createdAt: new Date(),
            updatedAt: new Date(),
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
    await queryInterface.bulkDelete("tb_computers", null, {});
  },
};