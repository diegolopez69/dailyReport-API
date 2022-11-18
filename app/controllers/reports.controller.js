const db = require("../models");
const Classroom = db.tb_classrooms;
const Chromebook = db.tb_chromebook;
const Op = db.Sequelize.Op;
const { QueryTypes } = require('sequelize');

// Retrieve all classroom with the chromebook's
exports.chromebook = (req, res) => {
  const Nombre = req.query.Nombre;
  var condition = Nombre ? { Nombre: { [Op.like]: `%${Nombre}%` } } : null;
  Classroom.findAll({
    where: condition,
    include: [{
      model: Chromebook,
      attributes: ['Chromebook_id', 'Estado', 'No_sn', 'No_armario']
    }],
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).json({
        status: 500,
        Err: err.message || 'Some error occurred while retrieving Computers.'
      });
    });
};


// Retrieve all funtionals and not funcionals chromebooks
exports.funtionalChromebooks = async (req, res) => {
  const numberChromebookWorking = await db.sequelize.query("SELECT COUNT(*) AS Total FROM `tb_chromebooks` WHERE Estado = 1", { type: db.sequelize.QueryTypes.SELECT });
  const resOfChromebooks = numberChromebookWorking[0].Total;
  const NoFuntionalChromebooks = 72 - resOfChromebooks



  if (resOfChromebooks != null) {
    res.status(200).json({
      Funcional: resOfChromebooks,
      No_funtional: NoFuntionalChromebooks
    });
    return resOfChromebooks
  } else {
    res.status(500).json({
      status: 500,
      Err: err.message || 'Some error occurred while retrieving Computers.'
    });
  }
};