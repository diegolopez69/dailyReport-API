module.exports = app => {
  const Computer = require("../controllers/ordenador.controller.js");

  var router = require("express").Router();

  // Create a new Computer
  router.post("/", Computer.create);

  // Retrieve all Ordenadores
  router.get("/", Computer.findAll);

  // Retrieve a single Computer with id
  router.get("/:id", Computer.findOne);

  // Update a Computer with id
  router.put("/:id", Computer.update);

  // Delete a Computer with id
  router.delete("/:id", Computer.delete);

  app.use('/api/computer', router);
};
