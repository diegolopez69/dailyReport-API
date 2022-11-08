module.exports = app => {
  const Room = require("../controllers/aula.controller.js");
  const { authJwt } = require("../middleware");

  var router = require("express").Router();

  // Create a new Room
  router.post("/", [authJwt.verifyToken, authJwt.isModerator], Room.create);

  // Retrieve all Aulas
  router.get("/", [authJwt.verifyToken, authJwt.isModerator], Room.findAll);

  // Retrieve a single Room with id
  router.get("/:id", [authJwt.verifyToken, authJwt.isModerator], Room.findOne);

  // Update a Room with id
  router.put("/:id", [authJwt.verifyToken, authJwt.isModerator], Room.update);

  // Delete a Room with id
  router.delete("/:id", [authJwt.verifyToken, authJwt.isModerator], Room.delete);

  app.use('/api/room', router);
};
