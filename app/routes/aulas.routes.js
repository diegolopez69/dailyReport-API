module.exports = app => {
  const Aula = require("../controllers/aula.controller.js");

  var router = require("express").Router();

  // Create a new Aula
  router.post("/", Aula.create);

  // Retrieve all Aulas
  router.get("/", Aula.findAll);

  // Retrieve a single Aula with id
  router.get("/:id", Aula.findOne);

  // Update a Aula with id
  router.put("/:id", Aula.update);

  // Delete a Aula with id
  router.delete("/:id", Aula.delete);

  app.use('/api/aula', router);
};
