const db = require("../models");
const Classroom = db.tb_classrooms;
const Chromebook = db.tb_chromebook;
const Op = db.Sequelize.Op;

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

