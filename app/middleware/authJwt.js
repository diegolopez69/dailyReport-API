const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;

// Define a middleware function to verify a JSON Web Token
verifyToken = (req, res, next) => {
  // Get the token from the request headers
  let token = req.headers["x-access-token"];

  // If no token is provided, return a 403 status code
  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }

  // Verify the token using the secret from the auth config file
  jwt.verify(token, config.secret, (err, decoded) => {
    // If the token is invalid, return a 401 status code
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!",
      });
    }

    // Attach the decoded user ID to the request object
    req.userId = decoded.id;
    // Call the next middleware or route handler
    next();
  });
};

// Define a middleware function to check if a user has the "admin" role
isAdmin = (req, res, next) => {
  // Find the user by their ID in the request object
  User.findByPk(req.userId).then((user) => {
    // Get the user's roles from the database
    user.getRoles().then((roles) => {
      // Check if the user has the "admin" role
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "admin") {
          // If the user has the "admin" role, call the next middleware or route handler
          next();
          return;
        }
      }

      // If the user does not have the "admin" role, return a 403 status code
      res.status(403).send({
        message: "Require Admin Role!",
      });
      return;
    });
  });
};

isModerator = (req, res, next) => {
  // Find the user by their primary key (req.userId)
  User.findByPk(req.userId).then((user) => {
    // Get the roles associated with the user
    user.getRoles().then((roles) => {
      // Iterate through the list of roles
      for (let i = 0; i < roles.length; i++) {
        // If the current role is "moderator", allow the request to proceed
        if (roles[i].name === "moderator") {
          next();
          return;
        }
      }
      // If the loop completes without finding a "moderator" role, send a 403 Forbidden response
      res.status(403).send({
        message: "Require Moderator Role!",
      });
    });
  });
};

isModeratorOrAdmin = (req, res, next) => {
  // Find the user by their primary key (req.userId)
  User.findByPk(req.userId).then((user) => {
    // Get the roles associated with the user
    user.getRoles().then((roles) => {
      // Iterate through the list of roles
      for (let i = 0; i < roles.length; i++) {
        // If the current role is "moderator" or "admin", allow the request to proceed
        if (roles[i].name === "moderator" || roles[i].name === "admin") {
          next();
          return;
        }
      }
      // If the loop completes without finding a "moderator" or "admin" role, send a 403 Forbidden response
      res.status(403).send({
        message: "Require Moderator or Admin Role!",
      });
    });
  });
};

const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
  isModerator: isModerator,
  isModeratorOrAdmin: isModeratorOrAdmin,
};
module.exports = authJwt;
