const db = require("../models");
const Ordenador = db.tb_ordenadors;
const Op = db.Sequelize.Op;

// Create and Save a new Ordenador
exports.create = (req, res) => {
  console.log("body", req.body.Nombre);
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  
  // Create a Ordenador
  const ordenador = {
    Nombre: req.body.Nombre
  };

  console.log("Ordenador", ordenador);


  
  // Save Ordenador in the database
  Ordenador.create(ordenador)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Ordenador."
      });
    });
};

// Retrieve all ordenador from the database.
exports.findAll = (req, res) => {
  const Nombre = req.query.Nombre;
  var condition = Nombre ? { Nombre: { [Op.like]: `%${Nombre}%` } } : null;

  Ordenador.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving ordenador."
      });
    });
};

// Find a single Ordenador with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Ordenador.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Ordenador with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Ordenador with id=" + id
      });
    });
};

// Update a Ordenador by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Ordenador.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Ordenador was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Ordenador with id=${id}. Maybe Ordenador was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Ordenador with id=" + id
      });
    });
};

// Delete a Ordenador with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  
  Ordenador.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Ordenador was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Ordenador with id=${id}. Maybe Ordenador was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Ordenador with id=" + id
      });
    });
};