const { verifySignUp } = require("../middleware");
const Auth = require("../controllers/auth.controller");
const UserRol = require("../controllers/user_roles.controller");

module.exports = function (app) {
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
 
  // Retrieve all users
  app.get("/api/user", Auth.findAll);

  // Retrieve all users with roles
  app.get("/api/user-roles", UserRol.findAll);

  // Retrieve a single User with id
  app.get("/api/user/:id", Auth.findOne);

  // Login on the application
  app.post("/api/auth/signin", Auth.signin);

  // Update a User with id
  app.put("/api/user/:id", Auth.update);

  // Delete a User with id
  app.delete("/api/user/:id", Auth.delete);
};  