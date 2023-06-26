const db = require("../models");
const Op = db.Sequelize.Op;
const { QueryTypes } = require("sequelize");

// Function to retrieve the actual amount of keyboards that physically exist by months
async function getActualAmountByMonth(columnName, toolId) {
  const query = `
  SELECT months.month, COALESCE(inventories.${columnName}, 0) AS ${columnName}
  FROM (
    SELECT 1 AS month UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL
    SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL
    SELECT 9 UNION ALL SELECT 10 UNION ALL SELECT 11 UNION ALL SELECT 12
  ) AS months
  LEFT JOIN (
    SELECT EXTRACT(MONTH FROM createdAt) AS month, COUNT(*) AS ${columnName}
    FROM tb_inventories
    WHERE Tool_id = ${toolId}
      AND EXTRACT(MONTH FROM createdAt) = EXTRACT(MONTH FROM CURRENT_DATE)
      AND EXTRACT(YEAR FROM createdAt) = EXTRACT(YEAR FROM CURRENT_DATE)
    GROUP BY EXTRACT(MONTH FROM createdAt)
  ) AS inventories ON months.month = inventories.month
  ORDER BY months.month;
  `;

  const result = await db.sequelize.query(query, { type: db.sequelize.QueryTypes.SELECT });
  return result;
}

// Retrieve the count of how many keyboards exist over time
exports.keyboards = async (req, res) => {
  try {
    // Retrive the actual count of keyboards that physically exist
    const getAmountOfKeyboardsIfPhysicallyExist = await getActualAmountByMonth('total_keyboards', 3);

    // Check if both queries were successful
    if (getAmountOfKeyboardsIfPhysicallyExist) {
      // Return the results with success message
      res.status(200).json({
        actual_number_of_keyboards: getAmountOfKeyboardsIfPhysicallyExist,
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
  const getAmountOfMousesIfPhysicallyExist = await getActualAmountByMonth('total_mouses', 4);

  // Check if the queries were successful and return the results
  if (getAmountOfMousesIfPhysicallyExist) {
    res.status(200).json({
      actual_number_of_mouses: getAmountOfMousesIfPhysicallyExist,
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

// Retrieve the count of how many projectors exist over time
exports.projectors = async (req, res) => {
  try {
    // Retrive the actual count of projectors that physically exist
    const getAmountOfProjectorsIfPhysicallyExist = await getActualAmountByMonth('total_projectors', 11);
    
    // Check if both queries were successful
    if (getAmountOfProjectorsIfPhysicallyExist) {
      // Return the results with success message
      res.status(200).json({
        Actual_quantity_projectors: getAmountOfProjectorsIfPhysicallyExist,
      });
    } else {
      // Return an error if there was a problem with the queries
      res.status(500).json({
        status: 500,
        Err:
          err.message ||
          "Some error occurred while retrieving the total of power cables.",
      });
    }
  } catch (error) {
    // Handle any unexpected errors
    res.status(500).json({
      success: false,
      message: "Error retrieving projectors totals",
      error: error.message
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

  totalClassroomsChecked = [
    getAllClassroomsChecked[0].ClassroomChecked,
    getAllClassroomsNotChecked[0].ClassroomNotChecked,
  ];

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
