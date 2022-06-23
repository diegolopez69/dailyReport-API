const db = require("../models");
const Ordenador_aula = db.tb_aula_herramienta_ordenador1;
const Op = db.Sequelize.Op;

// Create and Save a new Ordenador_aula
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  
  // Create a Ordenador_aula
  const ordenador_aula = {
    Tipo: req.body.Tipo,
    Nombre: req.body.Nombre
  };
  

  // Save Ordenador_aula in the database
  Ordenador_aula.create(ordenador_aula)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Ordenador_aula."
      });
    });
};

// Retrieve all ordenador_aulas from the database.
exports.findAll = (req, res) => {
  const Id = req.query.Id;
  var condition = Id ? { Id: { [Op.like]: `%${Id}%` } } : null;

  Ordenador_aula.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving ordenador_aulas."
      });
    });
};

// Find a single Ordenador_aula with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Ordenador_aula.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Ordenador_aula with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Ordenador_aula with id=" + id
      });
    });
};

// Update a Ordenador_aula by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Ordenador_aula.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Ordenador_aula was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Ordenador_aula with id=${id}. Maybe Ordenador_aula was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Ordenador_aula with id=" + id
      });
    });
};

// Delete a Ordenador_aula with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Ordenador_aula.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Ordenador_aula was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Ordenador_aula with id=${id}. Maybe Ordenador_aula was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Ordenador_aula with id=" + id
      });
    });
};
