const db = require("../models");
const Tool = db.tb_tools;
const Op = db.Sequelize.Op;
const Joi = require("joi");

// Define schema for tool data validation
const toolSchema = Joi.object({
  Type: Joi.string().required(),
  Name: Joi.string().required(),
});

// Create and Save a new Tool
exports.create = (req, res) => {
  // Validate request body
  const { error, value } = toolSchema.validate(req.body);
  if (error) {
    res.status(400).json({
      status: 400,
      message: error.details[0].message,
    });
    return;
  }

  // Create a Tool
  const tool = {
    Type: req.body.Type,
    Name: req.body.Name,
  };

  // Save Tool in the database
  Tool.create(tool)
    .then((data) => {
      res.status(201).json({
        status: 201,
        message: "Tool was created successfully!",
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        Err: err.message || "Some error occurred while creating the Tool.",
      });
    });
};

// Retrieve all tools from the database.
exports.findAll = (req, res) => {
  const Id = req.query.Id;
  var condition = Id ? { Id: { [Op.like]: `%${Id}%` } } : null;

  Tool.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        Err: err.message || "Some error occurred while retrieving Tools.",
      });
    });
};

// Find a single Tool with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tool.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).json({
          status: 404,
          message: `Cannot find Tool with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        message: "Error retrieving Tool with id=" + id,
      });
    });
};

// Update a Tool by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  // Validate request body
  const { error, value } = toolSchema.validate(req.body);
  if (error) {
    res.status(400).json({
      status: 400,
      message: error.details[0].message,
    });
    return;
  }

  Tool.update(req.body, {
    where: { Tool_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).json({
          status: 200,
          message: "Tool was updated successfully.",
        });
      } else {
        res.status(400).json({
          status: 400,
          message: `Cannot update Tool with id=${id}. Maybe Tool was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        message: "Error updating Tool with id=" + id,
      });
    });
};

// Delete a Tool with the specified id in the request
exports.delete = async (req, res) => {
  const id = req.params.id;

  try {
    // Check if there are any related records in the tb_inventories table
    const verifyTools = await db.sequelize.query(
      "SELECT COUNT(*) AS number FROM tb_inventories WHERE `Tool_id` = ?",
      {
        replacements: [id],
        type: db.sequelize.QueryTypes.SELECT,
      }
    );

    const NumberOfVerifyTools = verifyTools[0].number;

    if (NumberOfVerifyTools >= 1) {
      // If there are related records, start a transaction to delete them from both tables
      await db.sequelize.transaction(async (transaction) => {
        // Delete the related records from the tb_inventories table
        await db.tb_inventories.destroy(
          {
            where: { Tool_id: id },
            transaction,
          }
        );

        // Delete the Tool record from the tb_tools table
        const numDeleted = await db.tb_tools.destroy(
          {
            where: { Tool_id: id },
            transaction,
          }
        );

        if (numDeleted === 1) {
          // If the Tool was successfully deleted, send a success response
          res.status(200).json({
            status: 200,
            message: "Tool was deleted successfully!",
          });
        } else {
          // If the Tool was not found, send an error response
          res.status(400).json({
            status: 400,
            message: `Cannot delete Tool with id=${id}. Maybe Tool was not found!`,
          });
        }
      });
    } else {
      // If there are no related records, delete the Tool from the tb_tools table
      const numDeleted = await db.tb_tools.destroy({
        where: { Tool_id: id },
      });

      if (numDeleted === 1) {
        // If the Tool was successfully deleted, send a success response
        res.status(200).json({
          status: 200,
          message: "Tool was deleted successfully!",
        });
      } else {
        // If the Tool was not found, send an error response
        res.status(400).json({
          status: 400,
          message: `Cannot delete Tool with id=${id}. Maybe Tool was not found!`,
        });
      }
    }
  } catch (err) {
    // If an error occurs during the deletion process, send an error response
    res.status(500).json({
      status: 500,
      message:
        "An error occurred while deleting the Tool with id=" + id,
    });
  }
};
