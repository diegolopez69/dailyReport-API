const db = require("../models");
const Classroom = db.tb_classrooms;
const Chromebook = db.tb_chromebook;
const Op = db.Sequelize.Op;
const { QueryTypes } = require('sequelize');

// Retrieve all classroom with the chromebook's
exports.chromebook = (req, res) => {
  const Nombre = req.query.Nombre;
  var condition = Nombre ? { Nombre: { [Op.like]: `%${Nombre}%` } } : null;
  Classroom.findAll({ where: condition, 
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
// exports.chromebookFuncionales = (req, res) => {
//   const Nombre = req.query.Nombre;
//   var condition = Nombre ? { Nombre: { [Op.like]: `%${Nombre}%` } } : null;
//   Chromebook.findAll({ where: condition, 
//     attributes: ['No_chr_funcionales', 'No_chr_no_funcionales']
//   })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).json({ 
//         status: 500,
//         Err: err.message || 'Some error occurred while retrieving Computers.' 
//       });
//     });
// };










// Retrieve all funtionals and not funcionals chromebooks
exports.chromebookFuncionales = async(req, res) => {
  // const dataaa = sequelize.query("SELECT COUNT(*) FROM `tb_chromebooks` WHERE Estado = 1;", { type: QueryTypes.SELECT });
  // console.log("data", dataaa)


  const cars = await db.sequelize.query("SELECT COUNT(*) FROM `tb_chromebooks` WHERE Estado = 1", {type: db.sequelize.QueryTypes.SELECT});
  //console.log("data", cars)
  console.log("------------------------------------------------");
  console.log(cars);
  console.log("------------------------------------------------");

  const Nombre = req.query.Nombre;
  var condition = Nombre ? { Nombre: { [Op.like]: `%${Nombre}%` } } : null;
  Chromebook.findAll({ where: condition, 
    attributes: ['No_chr_funcionales', 'No_chr_no_funcionales']
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