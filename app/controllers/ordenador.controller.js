const db = require("../models");
const Computer = db.tb_computers;
const Op = db.Sequelize.Op;

// Create and Save a new Computer
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  
  // Create a Computer
  const computer = {
    Nombre: req.body.Nombre
  };


  
  // Save Computer in the database
  Computer.create(computer)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Computer."
      });
    });
};

// Retrieve all computer from the database.
exports.findAll = (req, res) => {
  const Nombre = req.query.Nombre;
  var condition = Nombre ? { Nombre: { [Op.like]: `%${Nombre}%` } } : null;

  Computer.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving computer."
      });
    });
};

// Find a single Computer with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Computer.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Computer with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Computer with id=" + id
      });
    });
};

// Update a Computer by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Computer.update(req.body, {
    where: { Ordenador_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Computer was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Computer with id=${id}. Maybe Computer was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Computer with id=" + id
      });
    });
};

// Delete a Computer with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  
  Computer.destroy({
    where: { Ordenador_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Computer was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Computer with id=${id}. Maybe Computer was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Computer with id=" + id
      });
    });
};