const db = require("../models");
const Classroom = db.tb_classrooms;
const Op = db.Sequelize.Op;
const Joi = require("joi");

// Define validation schema for classroom data
const classroomSchema = Joi.object({
  Floor: Joi.number().integer().required(),
  Number: Joi.number().integer().required(),
});

// Create and Save a new Classroom
exports.create = (req, res) => {
  // Validate request body
  const { error, value } = classroomSchema.validate(req.body);
  if (error) {
    res.status(400).json({
      status: 400,
      message: error.details[0].message,
    });
    return;
  }

  // Create a Classroom
  const classroom = {
    Floor: value.Floor,
    Number: value.Number,
  };

  // Save Classroom in the database
  Classroom.create(classroom)
    .then((data) => {
      res.status(201).json({
        status: 201,
        message: "Classroom was created successfully!",
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        Err: err.message || "Some error occurred while creating the Classroom.",
      });
    });
};

// Retrieve all classrooms from the database.
exports.findAll = (req, res) => {
  const Id = req.query.Id;
  var condition = Id ? { Id: { [Op.like]: `%${Id}%` } } : null;

  Classroom.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        Err: err.message || "Some error occurred while retrieving classrooms.",
      });
    });
};

// Find a single Classroom with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Classroom.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).json({
          status: 404,
          message: `Cannot find Classroom with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        message: "Error retrieving Classroom with id=" + id,
      });
    });
};

// Update a Classroom by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  // Validate request body
  const { error, value } = classroomSchema.validate(req.body);
  if (error) {
    res.status(400).json({
      status: 400,
      message: error.details[0].message,
    });
    return;
  }

  Classroom.update(req.body, {
    where: { Classroom_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).json({
          status: 200,
          message: "Classroom was updated successfully.",
        });
      } else {
        res.status(400).json({
          status: 400,
          message: `Cannot update Classroom with id=${id}. Maybe Classroom was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        message: "Error updating Classroom with id=" + id,
      });
    });
};

// Delete a Classroom with the specified id in the request
exports.delete = async (req, res) => {
  const id = req.params.id;

  try{
    const verifyClassroom = await db.sequelize.query(
      "SELECT COUNT(*) AS number FROM tb_inventories WHERE `Classroom_id` = ?",
      //"SELECT * FROM tb_inventories WHERE `Classroom_id` = ?",
      {
        replacements: [id],
        type: db.sequelize.QueryTypes.SELECT,
      }
    );
  
    const NumberOfVerifyClassroom = verifyClassroom[0].number;
      
    if (NumberOfVerifyClassroom >= 1) {
      // If there are related records, start a transaction to delete them from both tables
      await db.sequelize.transaction(async (transaction) => {
        // Delete the related records from the tb_inventories table
        await db.tb_inventories.destroy(
          {
            where: { Classroom_id: id },
            transaction,
          }
        );

        // Delete the Classroom record from the tb_classrooms table
        const numDeleted = await db.tb_classrooms.destroy(
          {
            where: { Classroom_id: id },
            transaction,
          }
        );

        if (numDeleted === 1) {
          // If the Classroom was successfully deleted, send a success response
          res.status(200).json({
            status: 200,
            message: "Classroom was deleted successfully!",
          });
        } else {
          // If the Classroom was not found, send an error response
          res.status(400).json({
            status: 400,
            message: `Cannot delete Classroom with id=${id}. Maybe Classroom was not found!`,
          });
        }
      });
    } else {
      // If there are no related records, delete the Classroom from the tb_classrooms table
      const numDeleted = await db.tb_classrooms.destroy({
        where: { Classroom_id: id },
      });

      if (numDeleted === 1) {
        // If the Classroom was successfully deleted, send a success response
        res.status(200).json({
          status: 200,
          message: "Classroom was deleted successfully!",
        });
      } else {
        // If the Classroom was not found, send an error response
        res.status(400).json({
          status: 400,
          message: `Cannot delete Classroom with id=${id}. Maybe Classroom was not found!`,
        });
      }
    }
  } catch (err) {
    // If an error occurs during the deletion process, send an error response
    res.status(500).json({
      status: 500,
      message:
        "An error occurred while deleting the Classroom with id=" + id,
    });
  }
};