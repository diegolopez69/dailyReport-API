const db = require("../models");
const OrdenadorAulas = db.ordenador_aulas;
const Op = db.Sequelize.Op;

// Create and Save a new OrdenadorAulas
exports.create = (req, res) => {
  console.log("body", req.body.Nombre);
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  
  // Create a OrdenadorAulas
  const ordenadorAula = {
    Nombre: req.body.Nombre
  };

  console.log("OrdenadorAulas", ordenadorAula);


  
  // Save OrdenadorAulas in the database
  OrdenadorAulas.create(ordenadorAula)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the OrdenadorAulas."
      });
    });
};

// Retrieve all ordenadorAula from the database.
exports.findAll = (req, res) => {
  const Nombre = req.query.Nombre;
  var condition = Nombre ? { Nombre: { [Op.like]: `%${Nombre}%` } } : null;

  OrdenadorAulas.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving ordenadorAula."
      });
    });
};

// Find a single OrdenadorAulas with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  OrdenadorAulas.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find OrdenadorAulas with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving OrdenadorAulas with id=" + id
      });
    });
};

// Update a OrdenadorAulas by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  OrdenadorAulas.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "OrdenadorAulas was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update OrdenadorAulas with id=${id}. Maybe OrdenadorAulas was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating OrdenadorAulas with id=" + id
      });
    });
};

// Delete a OrdenadorAulas with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  
  OrdenadorAulas.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "OrdenadorAulas was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete OrdenadorAulas with id=${id}. Maybe OrdenadorAulas was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete OrdenadorAulas with id=" + id
      });
    });
};