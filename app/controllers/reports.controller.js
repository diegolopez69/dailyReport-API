const db = require("../models");
const Op = db.Sequelize.Op;
const { QueryTypes } = require("sequelize");

// Retrieve the count of how many keyboards has through the time
exports.keyboards = async (req, res) => {
  const getKeyboards = await db.sequelize.query(
    "SELECT COUNT(*) AS TotalKeyboards FROM tb_inventories WHERE Tool_id = 3;",
    { type: db.sequelize.QueryTypes.SELECT }
  );

  NumberOfKeyboards = getKeyboards[0].TotalKeyboards;
  console.log("Total_of_keyboards", NumberOfKeyboards);

  if (NumberOfKeyboards != null) {
    res.status(200).json({
      Total_of_keyboards: NumberOfKeyboards,
    });
  } else {
    res.status(500).json({
      status: 500,
      Err:
        err.message ||
        "Some error occurred while retrieving the total of keyboards .",
    });
  }
};

// Retrieve the count of how many mouses has through the time
exports.mouses = async (req, res) => {
  const getMouses = await db.sequelize.query(
    "SELECT COUNT(*) AS TotalMouses FROM tb_inventories WHERE Tool_id = 4;",
    { type: db.sequelize.QueryTypes.SELECT }
  );

  NumberOfMouses = getMouses[0].TotalMouses;
  console.log("getMouses", NumberOfMouses);

  if (NumberOfMouses != null) {
    res.status(200).json({
      Total_of_mouses: NumberOfMouses,
    });
  } else {
    res.status(500).json({
      status: 500,
      Err:
        err.message ||
        "Some error occurred while retrieving the total of mouses .",
    });
  }
};

// Retrieve the count of how many computers has through the time
exports.computers = async (req, res) => {
  const getComputers = await db.sequelize.query(
    "SELECT COUNT(*) AS TotalComputers FROM tb_computers",
    { type: db.sequelize.QueryTypes.SELECT }
  );

  NumberOfComputers = getComputers[0].TotalComputers;
  console.log("getComputers", NumberOfComputers);

  if (NumberOfComputers != null) {
    res.status(200).json({
      Total_of_computers: NumberOfComputers,
    });
  } else {
    res.status(500).json({
      status: 500,
      Err:
        err.message ||
        "Some error occurred while retrieving the total of computers .",
    });
  }
};

//Acá debe de utilizarse un cron Job
// Retrieve the count of how many computers has through the time
// exports.computers = async (req, res) => {
// let computers = [123, 200, 350];
// const getComputers = await db.sequelize.query(
//   "SELECT COUNT(*) AS TotalComputers FROM `tb_computers`",
//   { type: db.sequelize.QueryTypes.SELECT }
// );
// getComputersModify = getComputers[0].TotalComputers;
// computers.push(getComputersModify);
// console.log("computers", computers);
// if (computers != null) {
//   res.status(200).json({
//     ArrOfComputersThroughTime: computers,
//   });
//   return computers;
// } else {
//   res.status(500).json({
//     status: 500,
//     Err:
//       err.message ||
//       "Some error occurred while retrieving computers through time.",
//   });
// }
// };
