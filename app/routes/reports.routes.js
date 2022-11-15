module.exports = (app) => {
  const Reports = require("../controllers/reports.controller");
  const { authJwt } = require("../middleware");

  var router = require("express").Router();

  // Retrieve all Aulas
  router.get(
    "/chromebook",
    [authJwt.verifyToken, authJwt.isModerator],
    Reports.findAll
  );

  app.use("/api/report", router);
};
