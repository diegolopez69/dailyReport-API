const db = require("../models");
const Herramienta = db.tb_herramientas3;
const Op = db.Sequelize.Op;

// Create and Save a new Herramienta
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  
  // Create a Herramienta
  const herramienta = {
    Tipo: req.body.Tipo,
    Nombre: req.body.Nombre
  };
  

  // Save Herramienta in the database
  Herramienta.create(herramienta)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Herramienta."
      });
    });
};

// Retrieve all herramientas from the database.
exports.findAll = (req, res) => {
  const Id = req.query.Id;
  var condition = Id ? { Id: { [Op.like]: `%${Id}%` } } : null;

  Herramienta.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving herramientas."
      });
    });
};

// Find a single Herramienta with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Herramienta.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Herramienta with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Herramienta with id=" + id
      });
    });
};

// Update a Herramienta by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  console.log("Acá imprime el params ------------- ", req.params);
  
  console.log("Acá imprime el body ------------- ", req.body);
  Herramienta.update(req.body, {
    
    where: { Herramienta_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Herramienta was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Herramienta with id=${id}. Maybe Herramienta was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
//        message: "Error updating Herramienta with id=" + id
        message: err
        
      });
    });
};

// Delete a Herramienta with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Herramienta.destroy({
    where: { Herramienta_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Herramienta was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Herramienta with id=${id}. Maybe Herramienta was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Herramienta with id=" + id
      });
    });
};