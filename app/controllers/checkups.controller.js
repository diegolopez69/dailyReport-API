const db = require("../models");
const Checkup = db.tb_checkups;
const Op = db.Sequelize.Op;

// Create and Save a new Checkup
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).json({
      status: 400,
      message: 'Content can not be empty!'
    });
    return;
  }

  // Create a Checkup
  const checkup = {
    Review: req.body.Review, 
    Comments: req.body.Comments,
    there_is: req.body.there_is,
    Works: req.body.Works,
    Theoretical_amount: req.body.Theoretical_amount,
    Actual_amount: req.body.Actual_amount,
    Inventory_id: req.body.Inventory_id,
    Classroom_id: req.body.Classroom_id
  };


  // Save Checkup in the database
  Checkup.create(checkup)
    .then(data => {
      res.status(201).json({
        status: 201,
        message: 'Checkup was created successfully!'
      });
    })
    .catch(err => {
      res.status(500).json({
        status: 500,
        Err: err.message || 'Some error occurred while creating the Checkup.'
      });
    });
};

//If the user cannot do the revition of the classroom
exports.createNegative = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).json({
      status: 400,
      message: 'Content can not be empty!'
    });
    return;
  }

  // Create a Checkup
  const checkup = {
    Review: req.body.Review, 
    Comments: req.body.Comments,
    there_is: 0,
    Works: 0,
    Theoretical_amount: 0,
    Actual_amount: 0,
    Inventory_id: req.body.Inventory_id,
    Classroom_id: req.body.Classroom_id
  };


  // Save Checkup in the database
  Checkup.create(checkup)
    .then(data => {
      res.status(201).json({
        status: 201,
        message: 'Checkup negative was created successfully!'
      });
    })
    .catch(err => {
      res.status(500).json({
        status: 500,
        Err: err.message || 'Some error occurred while creating the Checkup.'
      });
    });
};

// Retrieve all checkups from the database.
exports.findAll = (req, res) => {
  const Id = req.query.Id;
  var condition = Id ? { Id: { [Op.like]: `%${Id}%` } } : null;

  Checkup.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).json({
        status: 500,
        Err: err.message || 'Some error occurred while retrieving Checkups.'
      });
    });
};

// Find a single Checkup with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Checkup.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).json({
          status: 404,
          message: `Cannot find Checkup with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        status: 500,
        message: "Error retrieving Checkup with id=" + id
      });
    });
};

// Update a Checkup by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Checkup.update(req.body, {

    where: { Checkup_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.status(200).json({
          status: 200,
          message: "Checkup was updated successfully."
        });
      } else {
        res.status(400).json({
          status: 400,
          message: `Cannot update Checkup with id=${id}. Maybe Checkup was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        status: 500,
        message: "Error updating Checkup with id=" + id
      });
    });
};

// Delete a Checkup with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Checkup.destroy({
    where: { Checkup_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.status(200).json({ 
          status: 200,
          message: "Checkup was deleted successfully!"
        });
      } else {
        res.status(400).json({ 
          status: 400,
          message: `Cannot delete Checkup with id=${id}. Maybe Checkup was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).json({ 
        status: 500,
        message: "Could not delete Checkup with id=" + id
      });
    });
};

// Delete a Checkup with the specified id and the number of the week
exports.deleteCheckupByWeek = (req, res) => {
  const id = req.params.id;

  Checkup.destroy({
    where: { Checkup_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.status(200).json({ 
          status: 200,
          message: "Checkup was deleted successfully!"
        });
      } else {
        res.status(400).json({ 
          status: 400,
          message: `Cannot delete Checkup with id=${id}. Maybe Checkup was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).json({ 
        status: 500,
        message: "Could not delete Checkup with id=" + id
      });
    });
};