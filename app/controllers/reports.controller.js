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

// Retrieve the count of how many power cable has
exports.powerCable = async (req, res) => {
  const getPowerCable = await db.sequelize.query(
    "SELECT COUNT(*) AS TotalPowerCable FROM tb_inventories WHERE Tool_id = 2;",
    { type: db.sequelize.QueryTypes.SELECT }
  );

  NumberOfPowerCable = getPowerCable[0].TotalPowerCable;
  console.log("getPowerCable", NumberOfPowerCable);

  if (NumberOfPowerCable != null) {
    res.status(200).json({
      Total_of_power_cables: NumberOfPowerCable,
    });
  } else {
    res.status(500).json({
      status: 500,
      Err:
        err.message ||
        "Some error occurred while retrieving the total of power cables.",
    });
  }
};


// Retrieve the count of how many ethernet cable has
exports.ethernetCable = async (req, res) => {
  const getEthernetCable = await db.sequelize.query(
    "SELECT COUNT(*) AS TotalEthernetCable FROM tb_inventories WHERE Tool_id = 1;",
    { type: db.sequelize.QueryTypes.SELECT }
  );

  NumberOfEthernetCable = getEthernetCable[0].TotalEthernetCable;
  console.log("getEthernetCable", NumberOfEthernetCable);

  if (NumberOfEthernetCable != null) {
    res.status(200).json({
      Total_of_ethernet_cables: NumberOfEthernetCable,
    });
  } else {
    res.status(500).json({
      status: 500,
      Err:
        err.message ||
        "Some error occurred while retrieving the total of power cables.",
    });
  }
};

// Retrieve the count of how many hdmi cable has
exports.hdmi = async (req, res) => {
  const getHdmi = await db.sequelize.query(
    "SELECT COUNT(*) AS TotalHdmi FROM tb_inventories WHERE Tool_id = 5;",
    { type: db.sequelize.QueryTypes.SELECT }
  );

  NumberOfHdmi = getHdmi[0].TotalHdmi;
  console.log("getHdmi", NumberOfHdmi);

  if (NumberOfHdmi != null) {
    res.status(200).json({
      Total_of_hdmi: NumberOfHdmi,
    });
  } else {
    res.status(500).json({
      status: 500,
      Err:
        err.message ||
        "Some error occurred while retrieving the total of power cables.",
    });
  }
};

// Retrieve the count of how many projectors has
exports.projectors = async (req, res) => {
  const getProjector = await db.sequelize.query(
    "SELECT COUNT(*) AS TotalProjector FROM tb_inventories WHERE Tool_id = 11;",
    { type: db.sequelize.QueryTypes.SELECT }
  );

  NumberOfProjector = getProjector[0].TotalProjector;
  console.log("getProjector", NumberOfProjector);

  if (NumberOfProjector != null) {
    res.status(200).json({
      Total_of_projector: NumberOfProjector,
    });
  } else {
    res.status(500).json({
      status: 500,
      Err:
        err.message ||
        "Some error occurred while retrieving the total of power cables.",
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
