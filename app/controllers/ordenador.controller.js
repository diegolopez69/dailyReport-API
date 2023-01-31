const db = require("../models");
const Computer = db.tb_computers;
const Op = db.Sequelize.Op;

// Create and Save a new Computer
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).json({
      status: 400,
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Computer
  const computer = {
    Nombre: req.body.Nombre,
  };

  // Save Computer in the database
  Computer.create(computer)
    .then((data) => {
      res.status(201).json({
        status: 201,
        message: "Computer was created successfully!",
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        Err: err.message || "Some error occurred while creating the Computer.",
      });
    });
};

// Retrieve all computer from the database.
exports.findAll = (req, res) => {
  const Nombre = req.query.Nombre;
  var condition = Nombre ? { Nombre: { [Op.like]: `%${Nombre}%` } } : null;

  Computer.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        Err: err.message || "Some error occurred while retrieving Computers.",
      });
    });
};

// Find a single Computer with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Computer.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).json({
          status: 404,
          message: `Cannot find Computer with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        message: "Error retrieving Computer with id=" + id,
      });
    });
};

// Update a Computer by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Computer.update(req.body, {
    where: { Ordenador_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).json({
          status: 200,
          message: "Computer was updated successfully.",
        });
      } else {
        res.status(400).json({
          status: 400,
          message: `Cannot update Computer with id=${id}. Maybe Computer was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        message: "Error updating Computer with id=" + id,
      });
    });
};


// Delete a Computer with the specified id in the request
exports.delete = async (req, res) => {
  const id = req.params.id;

  const verifyComputer = await db.sequelize.query(
    "SELECT COUNT(*) AS number FROM tb_aula_herramienta_ordenadors WHERE `Ordenador_id` = ?",
    //"SELECT * FROM tb_aula_herramienta_ordenadors WHERE `Ordenador_id` = ?",
    {
      replacements: [id],
      type: db.sequelize.QueryTypes.SELECT,
    }
  );

  const NumberOfVerifyComputers = verifyComputer[0].number;

  if (NumberOfVerifyComputers >= 1) {
    res.status(500).json({
      status: 500,
      message:
        "Computer " +
        id +
        " cannot be deleted because it is related to other elements.",
    });
  } else {
    Computer.destroy({
      where: { Ordenador_id: id },
    })
      .then((num) => {
        if (num == 1) {
          res.status(200).json({
            status: 200,
            message: "Computer was deleted successfully!",
          });
        } else {
          res.status(400).json({
            status: 400,
            message: `Cannot delete Computer with id=${id}. Maybe Computer was not found!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
          status: 500,
          message: "Could not delete Computer with id=" + id,
        });
      });
  }
};
