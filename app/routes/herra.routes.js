module.exports = app => {
  const herras = require("../controllers/herramientas.controller.js");

  var router = require("express").Router();

  // Create a new Herra
  router.post("/", herras.create);

  // Retrieve all Herras
  router.get("/", herras.findAll);

  // Retrieve a single Herra with id
  router.get("/:id", herras.findOne);

  // Update a Herra with id
  router.put("/:id", herras.update);

  // Delete a Herra with id
  // router.delete("/:id", herras.delete);
  
  app.use('/api/herras', router);
};
