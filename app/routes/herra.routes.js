module.exports = app => {
  const Tool = require("../controllers/herramientas.controller.js");

  var router = require("express").Router();

  // Create a new Herra
  router.post("/", Tool.create);

  // Retrieve all Herras
  router.get("/", Tool.findAll);

  // Retrieve a single Herra with id
  router.get("/:id", Tool.findOne);

  // Update a Herra with id
  router.put("/:id", Tool.update);

  // Delete a Herra with id
  router.delete("/:id", Tool.delete);
  
  app.use('/api/tool', router);
};
