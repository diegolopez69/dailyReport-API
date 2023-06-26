const db = require("../models");
const Computer = db.tb_computers;
const Op = db.Sequelize.Op;
const Joi = require("joi");

// Define validation schema using Joi
const computerSchema = Joi.object({
  Name: Joi.string().required(),
  Serie: Joi.string().required(),
});

// Create and Save a new Computer
exports.create = (req, res) => {
  // Validate request using Joi schema
  const { error } = computerSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      status: 400,
      message: error.details[0].message,
    });
  }

  // Create a Computer
  const computer = {
    Name: req.body.Name,
    Serie: req.body.Serie,
  };

  // Save Computer in the database
  Computer.create(computer)
    .then((data) => {
      res.status(201).json({
        status: 201,
        message: "Computer was created successfully!",
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        Err: err.message || "Some error occurred while creating the Computer.",
      });
    });
};

// Retrieve all computer from the database.
exports.findAll = (req, res) => {
  const Name = req.query.Name;
  var condition = Name ? { Name: { [Op.like]: `%${Name}%` } } : null;

  Computer.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        Err: err.message || "Some error occurred while retrieving Computers.",
      });
    });
};

// Find a single Computer with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Computer.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).json({
          status: 404,
          message: `Cannot find Computer with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        message: "Error retrieving Computer with id=" + id,
      });
    });
};

// Update a Computer by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  // Validate request body
  const { error, value } = computerSchema.validate(req.body);
  if (error) {
    res.status(400).json({
      status: 400,
      message: error.details[0].message,
    });
    return;
  }

  Computer.update(req.body, {
    where: { Computer_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).json({
          status: 200,
          message: "Computer was updated successfully.",
        });
      } else {
        res.status(400).json({
          status: 400,
          message: `Cannot update Computer with id=${id}. Maybe Computer was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        message: "Error updating Computer with id=" + id,
      });
    });
};

// Delete a Computer with the specified id in the request
exports.delete = async (req, res) => {
  const id = req.params.id;

  try {
    const verifyComputer = await db.sequelize.query(
      "SELECT COUNT(*) AS number FROM tb_inventories WHERE `Computer_id` = ?",
      //"SELECT * FROM tb_inventories WHERE `Computer_id` = ?",
      {
        replacements: [id],
        type: db.sequelize.QueryTypes.SELECT,
      }
    );

    const NumberOfVerifyComputers = verifyComputer[0].number;

    if (NumberOfVerifyComputers >= 1) {
      // If there are related records, start a transaction to delete them from both tables
      await db.sequelize.transaction(async (transaction) => {
        // Delete the related records from the tb_inventories table
        await db.tb_inventories.destroy({
          where: { Computer_id: id },
          transaction,
        });

        // Delete the Computer record from the tb_computers table
        const numDeleted = await db.tb_computers.destroy({
          where: { Computer_id: id },
          transaction,
        });

        if (numDeleted === 1) {
          // If the Computer was successfully deleted, send a success response
          res.status(200).json({
            status: 200,
            message: "Computer was deleted successfully!",
          });
        } else {
          // If the Computer was not found, send an error response
          res.status(400).json({
            status: 400,
            message: `Cannot delete Computer with id=${id}. Maybe Computer was not found!`,
          });
        }
      });
    } else {
      // If there are no related records, delete the Computer from the tb_computers table
      const numDeleted = await db.tb_computers.destroy({
        where: { Computer_id: id },
      });

      if (numDeleted === 1) {
        // If the Computer was successfully deleted, send a success response
        res.status(200).json({
          status: 200,
          message: "Computer was deleted successfully!",
        });
      } else {
        // If the Computer was not found, send an error response
        res.status(400).json({
          status: 400,
          message: `Cannot delete Computer with id=${id}. Maybe Computer was not found!`,
        });
      }
    }
  } catch (err) {
    // If an error occurs during the deletion process, send an error response
    res.status(500).json({
      status: 500,
      message: "An error occurred while deleting the computer with id=" + id,
    });
  }
};