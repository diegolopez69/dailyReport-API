module.exports = app => {
  const Ordenador_aula = require("../controllers/ordenador_aula.controller.js");

  var router = require("express").Router();

  // Create a new Ordenador_aula
  router.post("/", Ordenador_aula.create);

  // Retrieve all Ordenador_aulas
  router.get("/", Ordenador_aula.findAll);

  // Retrieve a single Ordenador_aula with id
  router.get("/:id", Ordenador_aula.findOne);

  // Update a Ordenador_aula with id
  router.put("/:id", Ordenador_aula.update);

  // Delete a Ordenador_aula with id
  router.delete("/:id", Ordenador_aula.delete);

  app.use('/api/ordenador_aula', router);
};
