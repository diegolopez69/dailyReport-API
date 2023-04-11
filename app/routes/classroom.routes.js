module.exports = app => {
  const Room = require("../controllers/classroom.controller.js");
  const { authJwt } = require("../middleware");

  var router = require("express").Router();

  // Create a new Room
  router.post("/", [authJwt.verifyToken, authJwt.isModerator], Room.create);

  // Retrieve all Classrooms
  router.get("/", [authJwt.verifyToken, authJwt.isModerator], Room.findAll);

  // Retrieve a single Room with id
  router.get("/:id", [authJwt.verifyToken, authJwt.isModerator], Room.findOne);

  // Update a Room with id
  router.put("/:id", [authJwt.verifyToken, authJwt.isModerator], Room.update);

  // Delete a Room with id
  router.delete("/:id", [authJwt.verifyToken, authJwt.isModerator], Room.delete);

  app.use('/api/classroom', router);
};
