const db = require("../models");
const Chromebook = db.tb_chromebook;
const Op = db.Sequelize.Op;

// Create and Save a new Chromebook
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).json({
      status: 400,
      message: 'Content can not be empty!'
    });
    return;
  }

  // Create a Chromebook
  const chromebook = {
    Estado: req.body.Estado,
    Descripcion: req.body.Descripcion,
    No_chromebook: req.body.No_chromebook,
    No_sn: req.body.No_sn,
    No_armario: req.body.No_armario,
    No_chr_funcionales: req.body.No_chr_funcionales,
    No_chr_no_funcionales: req.body.No_chr_no_funcionales,
    No_chr_totales: req.body.No_chr_totales,
  };


  // Save Chromebook in the database
  Chromebook.create(chromebook)
    .then(data => {
      res.status(201).json({
        status: 201,
        message: 'Chromebook was created successfully!'
      });
    })
    .catch(err => {
      res.status(500).json({
        status: 500,
        Err: err.message || 'Some error occurred while creating the Chromebook.'
      });
    });
};

// Retrieve all chromebooks from the database.
exports.findAll = (req, res) => {
  const Id = req.query.Id;
  var condition = Id ? { Id: { [Op.like]: `%${Id}%` } } : null;

  Chromebook.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).json({
        status: 500,
        Err: err.message || 'Some error occurred while retrieving Chromebooks.'
      });
    });
};

// Find a single Chromebook with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Chromebook.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).json({
          status: 404,
          message: `Cannot find Chromebook with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        status: 500,
        message: "Error retrieving Chromebook with id=" + id
      });
    });
};

// Update a Chromebook by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  
  Chromebook.update(req.body, {
    where: { Chromebook_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.status(200).json({
          status: 200,
          message: "Chromebook was updated successfully."
        });
      } else {
        res.status(400).json({
          status: 400,
          message: `Cannot update Chromebook with id=${id}. Maybe Chromebook was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        status: 500,
        message: "Error updating Chromebook with id=" + id
      });
    });
};

// Delete a Chromebook with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Chromebook.destroy({
    where: { Chromebook_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.status(200).json({ 
          status: 200,
          message: "Chromebook was deleted successfully!"
        });
      } else {
        res.status(400).json({ 
          status: 400,
          message: `Cannot delete Chromebook with id=${id}. Maybe Chromebook was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).json({ 
        status: 500,
        message: "Could not delete Chromebook with id=" + id
      });
    });
};