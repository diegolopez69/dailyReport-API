const { authJwt } = require("../middleware");
const User = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", User.allAccess);

  app.get(
    "/api/test/user",
    [authJwt.verifyToken],
    User.userBoard
  );

  app.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    User.moderatorBoard
  );
  
  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    User.adminBoard
  );
};