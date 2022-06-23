const db = require("../models");
const Aula = db.tb_aulas2;
const Op = db.Sequelize.Op;

// Create and Save a new Aula
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  
  // Create a Aula
  const aula = {
    Planta: req.body.Planta,
    Numero: req.body.Numero
  };

  // Save Aula in the database
  Aula.create(aula)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Aula."
      });
    });
};

// Retrieve all aulas from the database.
exports.findAll = (req, res) => {
  const Id = req.query.Id;
  var condition = Id ? { Id: { [Op.like]: `%${Id}%` } } : null;

  Aula.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving aulas."
      });
    });
};

// Find a single Aula with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Aula.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Aula with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Aula with id=" + id
      });
    });
};

// Update a Aula by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Aula.update(req.body, {
    where: { Aula_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Aula was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Aula with id=${id}. Maybe Aula was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Aula with id=" + id
      });
    });
};

// Delete a Aula with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Aula.destroy({
    where: { Aula_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Aula was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Aula with id=${id}. Maybe Aula was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Aula with id=" + id
      });
    });
};
