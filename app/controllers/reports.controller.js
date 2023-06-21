const db = require("../models");
const Op = db.Sequelize.Op;
const { QueryTypes } = require("sequelize");

// Retrieve the count of how many keyboards exist over time
exports.keyboards = async (req, res) => {
  try {
    // Query to get the actual count of keyboards that physically exist
    const getAmountOfKeyboardsIfPhysicallyExist = await db.sequelize.query(
      "SELECT months.month, COALESCE(checkups.total_keyboards, 0) AS total_keyboards FROM (SELECT 1 AS month UNION ALL SELECT 2 AS month UNION ALL SELECT 3 AS month UNION ALL SELECT 4 AS month UNION ALL SELECT 5 AS month UNION ALL SELECT 6 AS month UNION SELECT 7 AS month UNION ALL SELECT 8 AS month UNION ALL SELECT 9 AS month UNION ALL SELECT 10 AS month UNION ALL SELECT 11 AS month UNION ALL SELECT 12 AS month) AS months LEFT JOIN (SELECT EXTRACT(MONTH FROM createdAt) AS month, COUNT(*) AS total_keyboards FROM tb_checkups WHERE there_is = 0 AND inventory_id IN (SELECT Inventory_id FROM tb_inventories WHERE Tool_id = 3) AND EXTRACT(YEAR FROM createdAt) = EXTRACT(YEAR FROM CURRENT_DATE) GROUP BY EXTRACT(MONTH FROM createdAt)) AS checkups ON months.month = checkups.month ORDER BY months.month;",
      { type: db.sequelize.QueryTypes.SELECT }
    );

    // Retrieve the theoretical quantity of keyboards
    const getTheoreticalAmountOfKeyboards = await db.sequelize.query(
      "SELECT months.month, COUNT(tb_inventories.Tool_id) AS quantity_keyboards FROM (SELECT 1 AS month UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9 UNION SELECT 10 UNION SELECT 11 UNION SELECT 12) AS months LEFT JOIN tb_inventories ON months.month = MONTH(tb_inventories.createdAt) AND YEAR(tb_inventories.createdAt) = YEAR(CURRENT_DATE()) AND tb_inventories.Tool_id = 3 GROUP BY months.month ORDER BY months.month;",
      { type: db.sequelize.QueryTypes.SELECT }
    );

    // Check if both queries were successful
    if (getAmountOfKeyboardsIfPhysicallyExist && getTheoreticalAmountOfKeyboards) {
      // Return the results with success message
      res.status(200).json({
        actual_number_of_keyboards: getAmountOfKeyboardsIfPhysicallyExist,
        theoretical_quantity_keyboards: getTheoreticalAmountOfKeyboards
      });
    } else {
      // Return an error if there was a problem with the queries
      res.status(500).json({
        success: false,
        message: "Error retrieving keyboard totals",
        error: "An error occurred when retrieving the keyboard totals."
      });
    }
  } catch (error) {
    // Handle any unexpected errors
    res.status(500).json({
      success: false,
      message: "Error retrieving keyboard totals",
      error: error.message
    });
  }
};

// Retrieve the count of how many mouses exist over time
exports.mouses = async (req, res) => {
  try {
  // Query to get the actual count of mouses that physically exist
  const getAmountOfMousesIfPhysicallyExist = await db.sequelize.query(
    "SELECT months.Month, COALESCE(checkups.TotalMouses, 0) AS TotalMouses FROM ( SELECT 1 AS Month UNION ALL SELECT 2 AS Month UNION ALL SELECT 3 AS Month UNION ALL SELECT 4 AS Month UNION ALL SELECT 5 AS Month UNION ALL SELECT 6 AS Month UNION ALL SELECT 7 AS Month UNION ALL SELECT 8 AS Month UNION ALL SELECT 9 AS Month UNION ALL SELECT 10 AS Month UNION ALL SELECT 11 AS Month UNION ALL SELECT 12 AS Month ) AS months LEFT JOIN ( SELECT EXTRACT(MONTH FROM createdAt) AS Month, COUNT(*) AS TotalMouses FROM tb_checkups WHERE there_is = 0 AND inventory_id IN ( SELECT Inventory_id FROM tb_inventories WHERE Tool_id = 4 ) AND EXTRACT(YEAR FROM createdAt) = EXTRACT(YEAR FROM CURRENT_DATE) GROUP BY EXTRACT(MONTH FROM createdAt) ) AS checkups ON months.Month = checkups.Month ORDER BY months.Month;",
    { type: db.sequelize.QueryTypes.SELECT }
  );

  // Query to get the theoretical quantity of mouses for each month
  const getTheoreticalAmountOfMouses = await db.sequelize.query(
    "SELECT months.month AS month, COALESCE(t.quantity_mouses, 0) AS quantity_mouses FROM ( SELECT 1 AS month UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9 UNION SELECT 10 UNION SELECT 11 UNION SELECT 12 ) AS months LEFT JOIN ( SELECT MONTH(createdAt) AS month, COUNT(*) AS quantity_mouses FROM tb_inventories WHERE Tool_id = 4 AND YEAR(createdAt) = YEAR(CURRENT_DATE()) GROUP BY MONTH(createdAt) ) AS t ON months.month = t.month ORDER BY months.month;",
    { type: db.sequelize.QueryTypes.SELECT }
  );

  // Output the results to the console for debugging
  console.log("getAmountOfMousesIfPhysicallyExist", getAmountOfMousesIfPhysicallyExist);
  console.log("-----------------------------------");
  console.log("getTheoreticalAmountOfMouses", getTheoreticalAmountOfMouses);

  // Check if the queries were successful and return the results
  if (getAmountOfMousesIfPhysicallyExist && getTheoreticalAmountOfMouses) {
    res.status(200).json({
      actual_number_of_mouses: getAmountOfMousesIfPhysicallyExist,
      theoretical_quantity_mouses: getTheoreticalAmountOfMouses
    });
  } else {
    // Return an error if there was an issue retrieving the data
    res.status(500).json({
      status: 500,
      Err: err.message || "Some error occurred while retrieving the total of mouses.",
    });
  }
  } catch (error) {
    // Handle any unexpected errors
    res.status(500).json({
      success: false,
      message: "Error retrieving mouses totals",
      error: error.message
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

  const ComputerTheoretical = [23, 25, 26, 35, 33, 22, 87, 44, 33, 12, 12, 99]

  if (monthlyTotals != null) {
    res.status(200).json({
      Actual_quantity_computers: monthlyTotals,
      Theoretical_quantity_computers: ComputerTheoretical
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

  const ProjectorsTheoretical = [23, 25, 26, 35, 33, 22, 87, 44, 33, 12, 12, 99]
  
  if (ProjectorArray != null) {
    res.status(200).json({
      Actual_quantity_projectors: ProjectorArray,
      Theoretical_quantity_projectors: ComputerTheoretical
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
    "SELECT COUNT(DISTINCT ci.Classroom_id) AS ClassroomChecked FROM tb_checkups c JOIN tb_inventories ci ON c.Classroom_id = ci.Classroom_id WHERE c.Review = 1 AND EXTRACT(WEEK FROM c.createdAt) = EXTRACT(WEEK FROM CURRENT_DATE);",
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
