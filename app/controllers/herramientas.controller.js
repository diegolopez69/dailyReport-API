const db = require("../models");
const Tool = db.tb_tools;
const Op = db.Sequelize.Op;

// Create and Save a new Tool
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).json({
      status: 400,
      message: 'Content can not be empty!'
    });
    return;
  }

  // Create a Tool
  const tool = {
    Tipo: req.body.Tipo,
    Nombre: req.body.Nombre
  };


  // Save Tool in the database
  Tool.create(tool)
    .then(data => {
      res.status(201).json({
        status: 201,
        message: 'Tool was created successfully!'
      });
    })
    .catch(err => {
      res.status(500).json({
        status: 500,
        Err: err.message || 'Some error occurred while creating the Tool.'
      });
    });
};

// Retrieve all tools from the database.
exports.findAll = (req, res) => {
  const Id = req.query.Id;
  var condition = Id ? { Id: { [Op.like]: `%${Id}%` } } : null;

  Tool.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).json({
        status: 500,
        Err: err.message || 'Some error occurred while retrieving Tools.'
      });
    });
};

// Find a single Tool with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tool.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).json({
          status: 404,
          message: `Cannot find Tool with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        status: 500,
        message: "Error retrieving Tool with id=" + id
      });
    });
};

// Update a Tool by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tool.update(req.body, {
    where: { Herramienta_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.status(200).json({
          status: 200,
          message: "Tool was updated successfully."
        });
      } else {
        res.status(400).json({
          status: 400,
          message: `Cannot update Tool with id=${id}. Maybe Tool was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      console.log();
      res.status(500).json({
        status: 500,
        message: "Error updating Tool with id=" + id
      });
    });
};

// Delete a Tool with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tool.destroy({
    where: { Herramienta_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.status(200).json({ 
          status: 200,
          message: "Tool was deleted successfully!"
        });
      } else {
        res.status(400).json({ 
          status: 400,
          message: `Cannot delete Tool with id=${id}. Maybe Tool was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).json({ 
        status: 500,
        message: "Could not delete Tool with id=" + id
      });
    });
};