'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert('tb_chromebooks', [
      {
        Estado: 1,
        Descripcion: "Lo tiene Manuel Masías",
        No_chromebook: 1,
        No_sn: "F6393DKMTXM4WKT",
        Estado: 0,
        No_armario: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 2,
        No_sn: "MJJWHYTGB54R4KR",
        Estado: 1,
        No_armario: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 3,
        No_sn: "XJKTW2ZHZYPCHRH",
        Estado: 0,
        No_armario: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 4,
        No_sn: "5EZDATR8DJ3GQRV",
        Estado: 0,
        No_armario: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 5,
        No_sn: "AKKXS3JRZC95GCE",
        Estado: 0,
        No_armario: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 6,
        No_sn: "ETMKSMGS9C6EZYL",
        Estado: 0,
        No_armario: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 7,
        No_sn: "2JZF5GWNJ37PXRV",
        Estado: 0,
        No_armario: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 8,
        No_sn: "VP6TVF82WYBJRLN",
        Estado: 0,
        No_armario: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 9,
        No_sn: "4UUT33RB8V7EBZW",
        Estado: 0,
        No_armario: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "Lo tiene Erika Ordoñez",
        No_chromebook: 10,
        No_sn: "SMG9LYYCG9ERZ8H",
        Estado: 0,
        No_armario: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 11,
        No_sn: "F6393DKMTXM4WKT",
        Estado: 0,
        No_armario: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 12,
        No_sn: "MJJWHYTGB54R4KR",
        Estado: 0,
        No_armario: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 13,
        No_sn: "XJKTW2ZHZYPCHRH",
        Estado: 0,
        No_armario: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 14,
        No_sn: "5EZDATR8DJ3GQRV",
        Estado: 0,
        No_armario: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 15,
        No_sn: "AKKXS3JRZC95GCE",
        Estado: 0,
        No_armario: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 16,
        No_sn: "ETMKSMGS9C6EZYL",
        Estado: 0,
        No_armario: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 17,
        No_sn: "2JZF5GWNJ37PXRV",
        Estado: 0,
        No_armario: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 18,
        No_sn: "VP6TVF82WYBJRLN",
        Estado: 0,
        No_armario: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 19,
        No_sn: "4UUT33RB8V7EBZW",
        Estado: 0,
        No_armario: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 20,
        No_sn: "SMG9LYYCG9ERZ8H",
        Estado: 0,
        No_armario: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 21,
        No_sn: "VP6TVF82WYBJRLN",
        Estado: 0,
        No_armario: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 22,
        No_sn: "4UUT33RB8V7EBZW",
        Estado: 1,
        No_armario: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 23,
        No_sn: "SMG9LYYCG9ERZ8H",
        Estado: 0,
        No_armario: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 1,
        No_sn: "47MB49EUQTZ4M85",
        Estado: 0,
        No_armario: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 2,
        No_sn: "7DFS4PW7LK3EF88",
        Estado: 0,
        No_armario: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 3,
        No_sn: "HUVRGA9MTN3PJMK",
        Estado: 0,
        No_armario: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 4,
        No_sn: "4CGCCBFE3VPSYSZ",
        Estado: 0,
        No_armario: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 5,
        No_sn: "CHD7AAEVU5V37D5",
        Estado: 0,
        No_armario: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 6,
        No_sn: "ZU8YWCLDVS2LQVZ",
        Estado: 0,
        No_armario: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 7,
        No_sn: "K8ZGWMENR75LEBR",
        Estado: 0,
        No_armario: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 8,
        No_sn: "L62KKAJ8QV3A7LG",
        Estado: 0,
        No_armario: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 9,
        No_sn: "H8BRFANVTLFMNEC",
        Estado: 0,
        No_armario: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 10,
        No_sn: "BN2A5CKBVM3F6Q4",
        Estado: 0,
        No_armario: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 11,
        No_sn: "47MB49EUQTZ4M85",
        Estado: 0,
        No_armario: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 12,
        No_sn: "7DFS4PW7LK3EF88",
        Estado: 0,
        No_armario: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 13,
        No_sn: "HUVRGA9MTN3PJMK",
        Estado: 0,
        No_armario: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 14,
        No_sn: "4CGCCBFE3VPSYSZ",
        Estado: 0,
        No_armario: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 15,
        No_sn: "CHD7AAEVU5V37D5",
        Estado: 1,
        No_armario: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "Está físicamente pero no funciona",
        No_chromebook: 16,
        No_sn: "ZU8YWCLDVS2LQVZ",
        Estado: 1,
        No_armario: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 17,
        No_sn: "K8ZGWMENR75LEBR",
        Estado: 1,
        No_armario: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 18,
        No_sn: "L62KKAJ8QV3A7LG",
        Estado: 0,
        No_armario: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 19,
        No_sn: "H8BRFANVTLFMNEC",
        Estado: 0,
        No_armario: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 20,
        No_sn: "BN2A5CKBVM3F6Q4",
        Estado: 0,
        No_armario: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 21,
        No_sn: "47MB49EUQTZ4M85",
        Estado: 0,
        No_armario: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 22,
        No_sn: "7DFS4PW7LK3EF88",
        Estado: 0,
        No_armario: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 23,
        No_sn: "HUVRGA9MTN3PJMK",
        Estado: 0,
        No_armario: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 24,
        No_sn: "4CGCCBFE3VPSYSZ",
        Estado: 0,
        No_armario: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },




      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 1,
        No_sn: "ZKEUPPLDCH8WMWS",
        Estado: 0,
        No_armario: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 2,
        No_sn: "SSDY5RTSFUQBHZ4",
        Estado: 0,
        No_armario: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 3,
        No_sn: "33SQF6BNJQN6DPM",
        Estado: 0,
        No_armario: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 4,
        No_sn: "J8YXR6Y8LTUY6NG",
        Estado: 0,
        No_armario: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 5,
        No_sn: "E4YLA83XF4MEPN8",
        Estado: 0,
        No_armario: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 6,
        No_sn: "832GH5WVL6L6QUF",
        Estado: 0,
        No_armario: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 7,
        No_sn: "8NSFYGT99XPWYMR",
        Estado: 0,
        No_armario: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 8,
        No_sn: "C7P2FUAKB2NHJ6C",
        Estado: 0,
        No_armario: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 9,
        No_sn: "FC5CGC45XWBPVLJ",
        Estado: 0,
        No_armario: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 10,
        No_sn: "ZK7EH8SPA34JF9G",
        Estado: 1,
        No_armario: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 11,
        No_sn: "ZKEUPPLDCH8WMWS",
        Estado: 0,
        No_armario: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 12,
        No_sn: "SSDY5RTSFUQBHZ4",
        Estado: 0,
        No_armario: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 13,
        No_sn: "33SQF6BNJQN6DPM",
        Estado: 0,
        No_armario: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 14,
        No_sn: "J8YXR6Y8LTUY6NG",
        Estado: 0,
        No_armario: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 15,
        No_sn: "E4YLA83XF4MEPN8",
        Estado: 0,
        No_armario: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 16,
        No_sn: "832GH5WVL6L6QUF",
        Estado: 0,
        No_armario: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 17,
        No_sn: "8NSFYGT99XPWYMR",
        Estado: 0,
        No_armario: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 18,
        No_sn: "C7P2FUAKB2NHJ6C",
        Estado: 0,
        No_armario: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 19,
        No_sn: "FC5CGC45XWBPVLJ",
        Estado: 0,
        No_armario: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 20,
        No_sn: "ZK7EH8SPA34JF9G",
        Estado: 0,
        No_armario: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 21,
        No_sn: "ZKEUPPLDCH8WMWS",
        Estado: 0,
        No_armario: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "Está pérdida",
        No_chromebook: 22,
        No_sn: "SSDY5RTSFUQBHZ4",
        Estado: 1,
        No_armario: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 23,
        No_sn: "33SQF6BNJQN6DPM",
        Estado: 0,
        No_armario: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Estado: 1,
        Descripcion: "",
        No_chromebook: 24,
        No_sn: "J8YXR6Y8LTUY6NG",
        Estado: 0,
        No_armario: 3,
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
      await queryInterface.bulkDelete('tb_chromebooks', null, {});
  }
};
