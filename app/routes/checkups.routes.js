module.exports = app => {
  const Checkups = require("../controllers/checkups.controller.js");
  const { authJwt } = require("../middleware");

  var router = require("express").Router();

  // Create a new Checkups
  router.post("/", [authJwt.verifyToken, authJwt.isModerator], Checkups.create);

  // Retrieve all Aulas
  router.get("/", [authJwt.verifyToken, authJwt.isModerator], Checkups.findAll);

  // Retrieve a single Checkups with id
  router.get("/:id", [authJwt.verifyToken, authJwt.isModerator], Checkups.findOne);

  // Update a Checkups with id
  router.put("/:id",  [authJwt.verifyToken, authJwt.isModerator], Checkups.update);

  // Delete a Checkups with id
  router.delete("/:id", [authJwt.verifyToken, authJwt.isModerator], Checkups.delete);

  app.use('/api/checkups', router);
};
