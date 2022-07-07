const { verifySignUp } = require("../middleware");
const Auth = require("../controllers/auth.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
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

  app.get(
    "/api/auth/signup",
    Auth.findAll
  );
  
  app.post("/api/auth/signin", Auth.signin);
};