const db = require("../models");
const Chromebook = db.tb_chromebook;
const Op = db.Sequelize.Op;
const User_roles = db.tb_user_roles;
const Roles = db.role;
const User = db.user;

// Retrieve all users with the roles
exports.findAll = (req, res) => {
  const Id = req.query.Id;
  var condition = Id ? { Id: { [Op.like]: `%${Id}%` } } : null;

  User.findAll({
    where: condition,
    include: [
      {
        model: Roles,
        attributes: ['id', 'name']
      },
    ],
  })
    .then(async (users) => {    
      res.send(users);
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        Err: err.message || "Some error occurred while retrieving the users with roles.",
      });
    });
};
