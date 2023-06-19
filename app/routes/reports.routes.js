module.exports = (app) => {
  const Reports = require("../controllers/reports.controller");
  const { authJwt } = require("../middleware");

  var router = require("express").Router();
  
  //Retrieve all keybords
  router.get(
    "/keyboards",
    [authJwt.verifyToken, authJwt.isModerator],
    Reports.keyboards
  );

  //Retrieve all mouses
  router.get(
    "/mouses",
    [authJwt.verifyToken, authJwt.isModerator],
    Reports.mouses
  );


  //Retrieve all computers
  router.get(
    "/computers",
    [authJwt.verifyToken, authJwt.isModerator],
    Reports.computers
  );

  //Retrieve all ClassroomsCheecked
  router.get(
    "/classroomsChecked",
    [authJwt.verifyToken, authJwt.isModerator],
    Reports.classrooms
  );
  
  //Retrieve all projectors
  router.get(
    "/projectors",
    [authJwt.verifyToken, authJwt.isModerator],
    Reports.projectors
  );
  
  app.use("/api/report", router);
};
