module.exports = (app) => {
  const Reports = require("../controllers/reports.controller");
  const { authJwt } = require("../middleware");

  var router = require("express").Router();
  
  //Retrieve all keybords
  router.get(
    "/keyboards",
    [authJwt.verifyToken],
    Reports.keyboards
  );

  //Retrieve all mouses
  router.get(
    "/mouses",
    [authJwt.verifyToken],
    Reports.mouses
  );

  //Retrieve all projectors
  router.get(
    "/projectors",
    [authJwt.verifyToken],
    Reports.projectors
  );

  //Retrieve all classrooms
  router.get(
    "/classroomsChecked",
    [authJwt.verifyToken],
    Reports.classrooms
  );

  app.use("/api/report", router);
};