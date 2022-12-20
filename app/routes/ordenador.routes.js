module.exports = app => {
  const Computer = require("../controllers/ordenador.controller.js");
  const { authJwt } = require("../middleware");

  var router = require("express").Router();

  // Create a new Computer
  router.post("/", [authJwt.verifyToken, authJwt.isModerator], Computer.create);

  // Retrieve all computers
  router.get("/", [authJwt.verifyToken, authJwt.isModerator], Computer.findAll);

  // Retrieve a single Computer with id
  router.get("/:id", [authJwt.verifyToken, authJwt.isModerator], Computer.findOne);

  // Update a Computer with id
  router.put("/:id", [authJwt.verifyToken, authJwt.isModerator], Computer.update);

  // Delete a Computer with id
  router.delete("/:id", [authJwt.verifyToken, authJwt.isModerator], Computer.delete);

  app.use('/api/computer', router);
};
