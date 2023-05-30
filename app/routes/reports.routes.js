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

  //Retrieve all power cable's
  router.get(
    "/powerCable",
    [authJwt.verifyToken, authJwt.isModerator],
    Reports.powerCable
  );

  //Retrieve all ethernet cable's
  router.get(
    "/ethernetCable",
    [authJwt.verifyToken, authJwt.isModerator],
    Reports.ethernetCable
  );

  //Retrieve all hdmi
  router.get(
    "/hdmi",
    [authJwt.verifyToken, authJwt.isModerator],
    Reports.hdmi
  );

  //Retrieve all projectors
  router.get(
    "/projectors",
    [authJwt.verifyToken, authJwt.isModerator],
    Reports.projectors
  );
  

  app.use("/api/report", router);
};
