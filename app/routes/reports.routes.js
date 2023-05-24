module.exports = (app) => {
  const Reports = require("../controllers/reports.controller");
  const { authJwt } = require("../middleware");

  var router = require("express").Router();
  
  //Retrieve all keybords through time
  router.get(
    "/keyboards",
    [authJwt.verifyToken, authJwt.isModerator],
    Reports.keyboards
  );

  //Retrieve all mouses through time
  router.get(
    "/mouses",
    [authJwt.verifyToken, authJwt.isModerator],
    Reports.mouses
  );


  //Retrieve all computers through time
  router.get(
    "/computers",
    [authJwt.verifyToken, authJwt.isModerator],
    Reports.computers
  );

  app.use("/api/report", router);
};
