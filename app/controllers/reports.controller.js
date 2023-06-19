const db = require("../models");
const Op = db.Sequelize.Op;
const { QueryTypes } = require("sequelize");

// Retrieve the count of how many keyboards has through the time
exports.keyboards = async (req, res) => {
  const getKeyboards = await db.sequelize.query(
    "SELECT months.Month, COALESCE(checkups.TotalKeyboards, 0) AS TotalKeyboards FROM (SELECT 1 AS Month UNION ALL SELECT 2 AS Month UNION ALL SELECT 3 AS Month UNION ALL SELECT 4 AS Month UNION ALL SELECT 5 AS Month UNION ALL SELECT 6 AS Month UNION ALL SELECT 7 AS Month UNION ALL SELECT 8 AS Month UNION ALL SELECT 9 AS Month UNION ALL SELECT 10 AS Month UNION ALL SELECT 11 AS Month UNION ALL SELECT 12 AS Month ) AS months LEFT JOIN ( SELECT EXTRACT(MONTH FROM createdAt) AS Month, COUNT(*) AS TotalKeyboards FROM tb_checkups WHERE there_is = 0 AND inventory_id IN (SELECT Inventory_id FROM tb_inventories WHERE Tool_id = 3) AND EXTRACT(YEAR FROM createdAt) = EXTRACT(YEAR FROM CURRENT_DATE) GROUP BY EXTRACT(MONTH FROM createdAt)) AS checkups ON months.Month = checkups.Month ORDER BY months.Month;",
    { type: db.sequelize.QueryTypes.SELECT }
  );

  console.log("getKeyboards", getKeyboards);

  if (getKeyboards != null) {
    const resultArray = new Array(12).fill(0);
    getKeyboards.forEach((item) => {
      const month = item.Month - 1;
      resultArray[month] = item.TotalKeyboards;
    });
    res.status(200).json({
      Total_of_keyboards: resultArray,
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
    "SELECT months.Month, COALESCE(checkups.TotalMouses, 0) AS TotalMouses FROM ( SELECT 1 AS Month UNION ALL SELECT 2 AS Month UNION ALL SELECT 3 AS Month UNION ALL SELECT 4 AS Month UNION ALL SELECT 5 AS Month UNION ALL SELECT 6 AS Month UNION ALL SELECT 7 AS Month UNION ALL SELECT 8 AS Month UNION ALL SELECT 9 AS Month UNION ALL SELECT 10 AS Month UNION ALL SELECT 11 AS Month UNION ALL SELECT 12 AS Month ) AS months LEFT JOIN ( SELECT EXTRACT(MONTH FROM createdAt) AS Month, COUNT(*) AS TotalMouses FROM tb_checkups WHERE there_is = 0 AND inventory_id IN ( SELECT Inventory_id FROM tb_inventories WHERE Tool_id = 4 ) AND EXTRACT(YEAR FROM createdAt) = EXTRACT(YEAR FROM CURRENT_DATE) GROUP BY EXTRACT(MONTH FROM createdAt) ) AS checkups ON months.Month = checkups.Month ORDER BY months.Month;",
    { type: db.sequelize.QueryTypes.SELECT }
  );

  const MousesArray = new Array(12).fill(0);
  getMouses.forEach((item) => {
    const month = item.Month - 1;
    MousesArray[month] = item.TotalMouses;
  });

  if (MousesArray != null) {
    res.status(200).json({
      MousesThroughTime: MousesArray,
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
    "SELECT months.Month, COALESCE(checkups.TotalCheckups, 0) AS TotalCheckups FROM ( SELECT 1 AS Month UNION ALL SELECT 2 AS Month UNION ALL SELECT 3 AS Month UNION ALL SELECT 4 AS Month UNION ALL SELECT 5 AS Month UNION ALL SELECT 6 AS Month UNION ALL SELECT 7 AS Month UNION ALL SELECT 8 AS Month UNION ALL SELECT 9 AS Month UNION ALL SELECT 10 AS Month UNION ALL SELECT 11 AS Month UNION ALL SELECT 12 AS Month ) AS months LEFT JOIN ( SELECT EXTRACT(MONTH FROM createdAt) AS Month, COUNT(*) AS TotalCheckups FROM tb_checkups WHERE there_is = 0 AND Inventory_id IN (SELECT Inventory_id FROM tb_inventories WHERE Computer_id IN (SELECT Computer_id FROM tb_computers)) GROUP BY EXTRACT(MONTH FROM createdAt) ) AS checkups ON months.Month = checkups.Month ORDER BY months.Month; ",
    { type: db.sequelize.QueryTypes.SELECT }
  );

  // Create an array to store the results for each month
  const monthlyTotals = Array(12).fill(0);

  // Iterate over the query results and populate the monthlyTotals array
  getComputers.forEach((result) => {
    const month = result.Month - 1; // Adjust month to zero-based index
    monthlyTotals[month] = result.TotalCheckups;
  });

  if (monthlyTotals != null) {
    res.status(200).json({
      Total_of_computers: monthlyTotals,
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
    "SELECT months.Month, COALESCE(checkups.TotalProjectors, 0) AS TotalProjectors FROM ( SELECT 1 AS Month UNION ALL SELECT 2 AS Month UNION ALL SELECT 3 AS Month UNION ALL SELECT 4 AS Month UNION ALL SELECT 5 AS Month UNION ALL SELECT 6 AS Month UNION ALL SELECT 7 AS Month UNION ALL SELECT 8 AS Month UNION ALL SELECT 9 AS Month UNION ALL SELECT 10 AS Month UNION ALL SELECT 11 AS Month UNION ALL SELECT 12 AS Month ) AS months LEFT JOIN ( SELECT EXTRACT(MONTH FROM createdAt) AS Month, COUNT(*) AS TotalProjectors FROM tb_checkups WHERE there_is = 0 AND inventory_id IN ( SELECT Inventory_id FROM tb_inventories WHERE Tool_id = 11 ) GROUP BY EXTRACT(MONTH FROM createdAt) ) AS checkups ON months.Month = checkups.Month ORDER BY months.Month;",
    { type: db.sequelize.QueryTypes.SELECT }
  );
  
  const ProjectorArray = new Array(12).fill(0);
  getProjector.forEach((item) => {
    const month = item.Month - 1;
    ProjectorArray[month] = item.TotalProjectors;
  });
  if (ProjectorArray != null) {
    res.status(200).json({
      Total_of_projector: ProjectorArray,
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
    "SELECT COUNT(*) AS ClassroomChecked FROM tb_checkups WHERE Review = 1 AND EXTRACT(WEEK FROM createdAt) = EXTRACT(WEEK FROM CURRENT_DATE);",
    { type: db.sequelize.QueryTypes.SELECT }
  );
  const getAllClassroomsNotChecked = await db.sequelize.query(
    "SELECT COUNT(*) AS ClassroomNotChecked FROM tb_checkups WHERE Review = 0 AND EXTRACT(WEEK FROM createdAt) = EXTRACT(WEEK FROM CURRENT_DATE);",

    { type: db.sequelize.QueryTypes.SELECT }
  );

  console.log("getAllClassroomsChecked", getAllClassroomsChecked);
  console.log("getAllClassroomsNotChecked", getAllClassroomsNotChecked);

  totalClassroomsChecked = [
    getAllClassroomsChecked[0].ClassroomChecked,
    getAllClassroomsNotChecked[0].ClassroomNotChecked,
  ];
  console.log("totalClassroomsChecked", totalClassroomsChecked);

  if (totalClassroomsChecked != null) {
    res.status(200).json({
      WeekClassroomCheckedAndNot: totalClassroomsChecked,
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
