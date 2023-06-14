const db = require("../models");
const Inventory = db.tb_inventories; //Si falla acá hay que eliminar el #1
const Tool = db.tb_tools; //Si falla acá hay que eliminar el #3
const Classroom = db.tb_classrooms;
const Computer = db.tb_computers;
const Op = db.Sequelize.Op;
const Joi = require("joi");

const inventorySchema = Joi.object({
  Classroom_id: Joi.number().integer().required(),
  Computer_id: Joi.number().integer().required(),
  Tool_id: Joi.number().integer().required(),
  Amount: Joi.number().integer().required(),
});

// Create and Save a new Inventory
exports.create = (req, res) => {
  // Validate request
  const { error, value } = inventorySchema.validate(req.body);
  if (error) {
    res.status(400).json({
      status: 400,
      message: error.details[0].message,
    });
    return;
  }

  // Create a Inventory
  const inventory = {
    Classroom_id: req.body.Classroom_id,
    Computer_id: req.body.Computer_id,
    Tool_id: req.body.Tool_id,
    Amount: req.body.Amount,
  };

  console.log("inventory", inventory)
  // Save Inventory in the database
  Inventory.create(inventory)
    .then((data) => {
      res.status(201).json({
        status: 201,
        message: "computer_classroom was created successfully!",
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        Err:
          err.message ||
          "Some error occurred while creating the computer_classroom.",
      });
    });
};

// Retrieve all inventories from the database.
exports.findAll = (req, res) => {
  const Id = req.query.Id;
  var condition = Id ? { Id: { [Op.like]: `%${Id}%` } } : null;
  Inventory.findAll({
    where: condition,
    include: [
      {
        model: Tool,
        attributes: ["Tool_id", "Type", "Name"],
      },
      {
        model: Computer,
        as: "computer",
        attributes: ["Computer_id", "Name"],
      },
      {
        model: Classroom,
        attributes: ["Classroom_id", "Floor", "Number"],
      },
    ],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        Err:
          err.message ||
          "Some error occurred while retrieving computer_classrooms.",
      });
    });
};

// Find a single Inventory with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Inventory.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).json({
          status: 404,
          message: `Cannot find computer_classroom with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        message: "Error retrieving computer_classroom with id=" + id,
      });
    });
};

// Update a Inventory by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  // Validate request
  const { error, value } = inventorySchema.validate(req.body);
  if (error) {
    res.status(400).json({
      status: 400,
      message: error.details[0].message,
    });
    return;
  }

  Inventory.update(req.body, {
    
    where: { Inventory_id: id },
  })
    .then((num) => {
      console.log("req.body", req.body)
      if (num == 1) {
        res.status(200).json({
          status: 200,
          message: "computer_classroom was updated successfully.",
        });
      } else {
        res.status(400).json({
          status: 400,
          message: `Cannot update computer_classroom with id=${id}. Maybe computer_classroom was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        message: "Error updating computer_classroom with id=" + id,
      });
    });
};

// Delete a Inventory with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Inventory.destroy({
    where: { Inventory_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).json({
          status: 200,
          message: "computer_classroom was deleted successfully!",
        });
      } else {
        res.status(400).json({
          status: 400,
          message: `Cannot delete computer_classroom with id=${id}. Maybe computer_classroom was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        message: "Could not delete computer_classroom with id=" + id,
      });
    });
};