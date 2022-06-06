module.exports = app => {
  const Ordenador = require("../controllers/ordenador.controller.js");

  var router = require("express").Router();

  // Create a new Ordenador
  router.post("/", Ordenador.create);

  // Retrieve all Ordenadores
  router.get("/", Ordenador.findAll);

  // Retrieve a single Ordenador with id
  router.get("/:id", Ordenador.findOne);

  // Update a Ordenador with id
  router.put("/:id", Ordenador.update);

  // Delete a Ordenador with id
  // router.delete("/:id", Ordenador.delete);

  // Delete all Ordenadores
  // router.delete("/", Ordenador.deleteAll);

  app.use('/api/ordenador', router);
};
