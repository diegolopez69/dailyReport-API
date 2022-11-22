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
      Err: err.message || 'Some error occurred while retrieving funtionals and non funtionals chromebooks.'
    });
  }
};

// Retrieve the count of how many keyboards has through the time
exports.keyboards = async (req, res) => {
  let keyboards = [];
  let arroz = 5;
  let arro = 15;
  let arr = 25;
  const getKeyboards = await db.sequelize.query("SELECT COUNT(*) AS TotalKeyboards FROM `tb_tools` WHERE Nombre = 'Teclado'", { type: db.sequelize.QueryTypes.SELECT });
  getKeyboardsModify = getKeyboards[0].TotalKeyboards;
  keyboards.push(arroz);
  keyboards.push(arro);
  keyboards.push(arr);

  if (keyboards != null) {
    res.status(200).json({
      ArrOfKeyboardsThroughTime: keyboards
    });
    return keyboards
  } else {
    res.status(500).json({
      status: 500,
      Err: err.message || 'Some error occurred while retrieving keyboards through time.'
    });
  }
};