const db = require("../models");
const Chromebook = db.tb_chromebook;
const Op = db.Sequelize.Op;
const User_roles = db.tb_user_roles;
const User = db.user;


// Retrieve all chromebooks from the database.
exports.findAll = (req, res) => {
  const Id = req.query.Id;
  var condition = Id ? { Id: { [Op.like]: `%${Id}%` } } : null;


  User.findAll({ 
    where: condition,
    include: [{
      model: User_roles,
      attributes: ['userId', 'roleId']
    }
  ],
  })

  // User.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log("--------------------------------------------------------------------", err);
      res.status(500).json({
        status: 500,
        Err: err.message || 'Some error occurred while retrieving Chromebooks.'
      });
    });
};
