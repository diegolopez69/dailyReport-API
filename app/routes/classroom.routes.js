module.exports = app => {
  const Room = require("../controllers/classroom.controller.js");
  const { authJwt } = require("../middleware");

  var router = require("express").Router();

  // Create a new Room
  router.post("/", [authJwt.verifyToken, authJwt.isAdmin], Room.create);

  // Retrieve all Classrooms
  router.get("/", [authJwt.verifyToken], Room.findAll);

  // Retrieve a single Room with id
  router.get("/:id", [authJwt.verifyToken], Room.findOne);

  // Update a Room with id
  router.put("/:id", [authJwt.verifyToken, authJwt.isModerator], Room.update);

  // Delete a Room with id
  router.delete("/:id", [authJwt.verifyToken, authJwt.isAdmin], Room.delete);

  app.use('/api/classroom', router);
};