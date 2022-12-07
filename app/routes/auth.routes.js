const { verifySignUp } = require("../middleware");
const { authJwt } = require("../middleware");
const Auth = require("../controllers/auth.controller");
const UserRol = require("../controllers/user_roles.controller");

module.exports = function (app) {

  // Sign in on the application
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    Auth.signup
  );

  // Login on the application
  app.post("/api/auth/signin", Auth.signin);

  // Retrieve all users
  app.get("/api/user", [authJwt.verifyToken, authJwt.isAdmin], Auth.findAll);

  // Retrieve all users with roles
  app.get("/api/user-roles", [authJwt.verifyToken, authJwt.isAdmin], UserRol.findAll);

  // Retrieve a single User with id
  app.get("/api/user/:id", [authJwt.verifyToken, authJwt.isAdmin], Auth.findOne);

  // Update a User with id
  app.put("/api/user/:id", [authJwt.verifyToken, authJwt.isAdmin], Auth.update);

  // Delete a User with id
  app.delete("/api/user/:id", [authJwt.verifyToken, authJwt.isAdmin], Auth.delete);

};  