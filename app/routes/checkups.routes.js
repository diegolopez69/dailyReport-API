module.exports = app => {
  const Checkups = require("../controllers/checkups.controller.js");
  const { authJwt } = require("../middleware");

  var router = require("express").Router();

  // Create a new Checkups
  router.post("/", [authJwt.verifyToken, authJwt.isModerator], Checkups.create);

  // Create a negative Checkup
  router.post("/negative", [authJwt.verifyToken, authJwt.isModerator], Checkups.createNegative);

  // Retrieve all Classrooms
  router.get("/", [authJwt.verifyToken, authJwt.isModerator], Checkups.findAll);

  // Retrieve a single Checkups with id
  router.get("/:id", [authJwt.verifyToken, authJwt.isModerator], Checkups.findOne);

  // Update a Checkups with id
  router.put("/:id",  [authJwt.verifyToken, authJwt.isModerator], Checkups.update);

  // Delete a Checkups with id
  router.delete("/:id", [authJwt.verifyToken, authJwt.isModerator], Checkups.delete);

  // Delete a Checkups with id and number of the week
  router.delete("/delete/:id", [authJwt.verifyToken, authJwt.isModerator], Checkups.deleteCheckupByWeek);

  app.use('/api/checkups', router);
};
