const db = require("../models");
const Op = db.Sequelize.Op;
const { QueryTypes } = require("sequelize");

// Retrieve the count of how many keyboards has through the time
exports.keyboards = async (req, res) => {
  const getKeyboards = await db.sequelize.query(
    "SELECT COUNT(*) AS totalKeyboardsNow FROM tb_checkups  WHERE there_is = 0 AND inventory_id  IN (SELECT Inventory_id FROM tb_inventories WHERE Tool_id = 3) AND EXTRACT(WEEK FROM createdAt) = EXTRACT(WEEK FROM CURRENT_DATE);",
    { type: db.sequelize.QueryTypes.SELECT }
  );
  const getKeyboardsOneWeekBefore = await db.sequelize.query(
    "SELECT COUNT(*) AS totalKeyboardsOneWeekBefore FROM tb_checkups  WHERE there_is = 0 AND inventory_id  IN (SELECT Inventory_id FROM tb_inventories WHERE Tool_id = 3) AND EXTRACT(WEEK FROM createdAt) = EXTRACT(WEEK FROM DATE_SUB(CURRENT_DATE, INTERVAL 1 WEEK));",
    { type: db.sequelize.QueryTypes.SELECT }
  );
  const getKeyboardsTwoWeekBefore = await db.sequelize.query(
    "SELECT COUNT(*) AS totalKeyboardsTwoWeekBefore FROM tb_checkups  WHERE there_is = 0 AND inventory_id  IN (SELECT Inventory_id FROM tb_inventories WHERE Tool_id = 3) AND EXTRACT(WEEK FROM createdAt) = EXTRACT(WEEK FROM DATE_SUB(CURRENT_DATE, INTERVAL 2 WEEK));",
    { type: db.sequelize.QueryTypes.SELECT }
  );

  console.log("getKeyboards", getKeyboards[0].totalKeyboardsNow)
  console.log("getKeyboardsOneWeekBefore", getKeyboardsOneWeekBefore[0].totalKeyboardsOneWeekBefore)
  console.log("getKeyboardsOneWeekBefore", getKeyboardsTwoWeekBefore[0].totalKeyboardsTwoWeekBefore)

  TotalOfKeabords = [getKeyboards[0].totalKeyboardsNow, getKeyboardsOneWeekBefore[0].totalKeyboardsOneWeekBefore, getKeyboardsTwoWeekBefore[0].totalKeyboardsTwoWeekBefore]
  console.log('-------------------------------------------------------')
  console.log('TotalOfKeabords', TotalOfKeabords)
  

  if (getKeyboards != null) {
    res.status(200).json({
      Total_of_keyboards: getKeyboards,
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





// Retrieve the count of how many mouses disapper has through the time
exports.mouses = async (req, res) => {
  const getMouses = await db.sequelize.query(
    "SELECT COUNT(*) AS totalMousesNow FROM tb_checkups WHERE there_is = 0 AND inventory_id IN (SELECT Inventory_id FROM tb_inventories WHERE Tool_id = 4) AND EXTRACT(WEEK FROM createdAt) = EXTRACT(WEEK FROM CURRENT_DATE);",
    { type: db.sequelize.QueryTypes.SELECT }
  );
  const getMousesOneWeekBefore = await db.sequelize.query(
    "SELECT COUNT(*) AS totalMousesOneWeekBefore FROM tb_checkups WHERE there_is = 0 AND inventory_id IN (SELECT Inventory_id FROM tb_inventories WHERE Tool_id = 4) AND EXTRACT(WEEK FROM createdAt) = EXTRACT(WEEK FROM DATE_SUB(CURRENT_DATE, INTERVAL 1 WEEK));",
    { type: db.sequelize.QueryTypes.SELECT }
  );
  const getMousesTwoWeeksBefore = await db.sequelize.query(
    "SELECT COUNT(*) AS totalMousesTwoWeeksBefore FROM tb_checkups WHERE there_is = 0 AND inventory_id IN (SELECT Inventory_id FROM tb_inventories WHERE Tool_id = 4) AND EXTRACT(WEEK FROM createdAt) = EXTRACT(WEEK FROM DATE_SUB(CURRENT_DATE, INTERVAL 2 WEEK));",
    { type: db.sequelize.QueryTypes.SELECT }
  );


  getMousesOfThisWeek = getMouses[0].totalMousesNow
  console.log('getMousesOfThisWeek', getMousesOfThisWeek)
  
  getMousesWeekBefore = getMousesOneWeekBefore[0].totalMousesOneWeekBefore
  console.log('getMousesFixed 2', getMousesWeekBefore)

  getMousesTwoWeeksBeforee = getMousesTwoWeeksBefore[0].totalMousesTwoWeeksBefore
  console.log('getMousesFixed 3', getMousesTwoWeeksBeforee)

  TotalOfTheMouses = [getMousesOfThisWeek, getMousesWeekBefore, getMousesTwoWeeksBeforee]
  console.log('-------------------------------------------------------')
  console.log('TotalOfTheMouses', TotalOfTheMouses)


  if (TotalOfTheMouses != null) {
    res.status(200).json({
      MousesThroughTime: TotalOfTheMouses,
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






