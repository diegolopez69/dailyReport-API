const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

// Middleware function to check for duplicate username or email
checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Check for duplicate username
  User.findOne({
    where: {
      username: req.body.username,
    },
  }).then((user) => {
    // If a user with the same username is found, send a 400 Bad Request response
    if (user) {
      res.status(400).send({
        message: "Failed! Username is already in use!",
      });
      return;
    }
    // Check for duplicate email
    User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((user) => {
      // If a user with the same email is found, send a 400 Bad Request response
      if (user) {
        res.status(400).send({
          message: "Failed! Email is already in use!",
        });
        return;
      }
      // If no duplicate username or email is found, allow the request to proceed
      next();
    });
  });
};

// Middleware function to check if the provided roles exist
checkRolesExisted = (req, res, next) => {
  // If the request body includes a "roles" field
  if (req.body.roles) {
    // Iterate through the list of roles
    for (let i = 0; i < req.body.roles.length; i++) {
      // If the current role is not in the list of valid roles (ROLES), send a 400 Bad Request response
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: "Failed! Role does not exist = " + req.body.roles[i],
        });
        return;
      }
    }
  }
  // If no invalid roles are found, allow the request to proceed
  next();
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
  checkRolesExisted: checkRolesExisted,
};
module.exports = verifySignUp;
