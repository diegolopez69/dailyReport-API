module.exports = app => {
  const Room = require("../controllers/aula.controller.js");

  var router = require("express").Router();

  // Create a new Room
  router.post("/", Room.create);

  // Retrieve all Aulas
  router.get("/", Room.findAll);

  // Retrieve a single Room with id
  router.get("/:id", Room.findOne);

  // Update a Room with id
  router.put("/:id", Room.update);

  // Delete a Room with id
  router.delete("/:id", Room.delete);

  app.use('/api/room', router);
};
