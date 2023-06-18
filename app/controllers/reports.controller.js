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
  
  if (TotalOfKeabords != null) {
    res.status(200).json({
      Total_of_keyboards: TotalOfKeabords,
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


// Retrieve the count of how many projectors has
exports.projectors = async (req, res) => {
  const getProjector = await db.sequelize.query(
    "SELECT COUNT(*) AS totalProjectorsNow FROM tb_checkups WHERE there_is = 0 AND inventory_id IN (SELECT Inventory_id FROM tb_inventories WHERE Tool_id = 11) AND EXTRACT(WEEK FROM createdAt) = EXTRACT(WEEK FROM CURRENT_DATE);",
    { type: db.sequelize.QueryTypes.SELECT }
  );
  const getProjectorOneWeekBefore = await db.sequelize.query(
    "SELECT COUNT(*) AS totalProjectorsOneWeekBegfore FROM tb_checkups WHERE there_is = 0 AND inventory_id IN (SELECT Inventory_id FROM tb_inventories WHERE Tool_id = 11) AND EXTRACT(WEEK FROM createdAt) = EXTRACT(WEEK FROM DATE_SUB(CURRENT_DATE, INTERVAL 1 WEEK));",
    { type: db.sequelize.QueryTypes.SELECT }
  );
  const getProjectorTwoWeekBefore = await db.sequelize.query(
    "SELECT COUNT(*) AS totalProjectorsTwoWeekBegfore FROM tb_checkups WHERE there_is = 0 AND inventory_id IN (SELECT Inventory_id FROM tb_inventories WHERE Tool_id = 11) AND EXTRACT(WEEK FROM createdAt) = EXTRACT(WEEK FROM DATE_SUB(CURRENT_DATE, INTERVAL 2 WEEK));",
    { type: db.sequelize.QueryTypes.SELECT }
  );
  
  TotalOfProyectors = [getProjector[0].totalProjectorsNow, getProjectorOneWeekBefore[0].totalProjectorsOneWeekBegfore, getProjectorTwoWeekBefore[0].totalProjectorsTwoWeekBegfore]

  console.log('TotalOfProyectors', TotalOfProyectors)

  if (TotalOfProyectors != null) {
    res.status(200).json({
      Total_of_projector: TotalOfProyectors,
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

// Gets the classrooms that have already been checked and the classrooms that have not.
exports.classrooms = async (req, res) => {
  const getAllClassroomsChecked = await db.sequelize.query(
    "SELECT COUNT(*) AS ClassroomChecked FROM tb_checkups WHERE Review = 1;",
    { type: db.sequelize.QueryTypes.SELECT }
  );
  const getAllClassroomsNotChecked = await db.sequelize.query(
    "SELECT COUNT(*) AS ClassroomNotChecked FROM tb_checkups WHERE Review = 0;",

    { type: db.sequelize.QueryTypes.SELECT }
  );

  console.log('getAllClassroomsChecked', getAllClassroomsChecked)
  console.log('getAllClassroomsNotChecked', getAllClassroomsNotChecked)
  
  totalClassroomsChecked = [getAllClassroomsChecked[0].ClassroomChecked, getAllClassroomsNotChecked[0].ClassroomNotChecked]
  console.log('totalClassroomsChecked', totalClassroomsChecked)

  if (totalClassroomsChecked != null) {
    res.status(200).json({
      Classrooms: totalClassroomsChecked
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