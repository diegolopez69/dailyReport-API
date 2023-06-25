module.exports = app => {
  const Computer = require("../controllers/computer.controller.js");
  const { authJwt } = require("../middleware");

  var router = require("express").Router();

  // Create a new Computer
  router.post("/", [authJwt.verifyToken, authJwt.isAdmin], Computer.create);

  // Retrieve all computers
  router.get("/", [authJwt.verifyToken], Computer.findAll);

  // Retrieve a single Computer with id
  router.get("/:id", [authJwt.verifyToken], Computer.findOne);

  // Update a Computer with id
  router.put("/:id", [authJwt.verifyToken, authJwt.isModerator], Computer.update);

  // Delete a Computer with id
  router.delete("/:id", [authJwt.verifyToken, authJwt.isAdmin], Computer.delete);

  app.use('/api/computer', router);
};