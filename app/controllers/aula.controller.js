const db = require("../models");
const Classroom = db.tb_classrooms;
const Op = db.Sequelize.Op;

// Create and Save a new Classroom
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  
  // Create a Classroom
  const classroom = {
    Planta: req.body.Planta,
    Numero: req.body.Numero
  };

  // Save Classroom in the database
  Classroom.create(classroom)
    .then(data => {
      res.status(201).json({ 
        status: 201,
        Message: 'Classroom was created successfully!' 
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Classroom."
      });
    });
};

// Retrieve all classrooms from the database.
exports.findAll = (req, res) => {
  const Id = req.query.Id;
  var condition = Id ? { Id: { [Op.like]: `%${Id}%` } } : null;

  Classroom.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving classrooms."
      });
    });
};

// Find a single Classroom with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Classroom.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Classroom with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Classroom with id=" + id
      });
    });
};

// Update a Classroom by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Classroom.update(req.body, {
    where: { Aula_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Classroom was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Classroom with id=${id}. Maybe Classroom was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Classroom with id=" + id
      });
    });
};

// Delete a Classroom with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Classroom.destroy({
    where: { Aula_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Classroom was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Classroom with id=${id}. Maybe Classroom was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Classroom with id=" + id
      });
    });
};
