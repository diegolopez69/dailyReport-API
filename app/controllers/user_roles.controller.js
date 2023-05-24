const db = require("../models");
const Op = db.Sequelize.Op;
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
        attributes: ['name']
      },
    ],
  })
  .then((users) => {
    const usersWithRoles = users.map((user) => ({
      id: user.id,
      name: user.username,
      email: user.email,
      password: user.password,
      roles: user.roles.map((role) => role.name),
    }));
    res.send(usersWithRoles);
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        Err: err.message || "Some error occurred while retrieving the users with roles.",
      });
    });
};
