module.exports = app => {
  const Checkups = require("../controllers/checkups.controller.js");

  var router = require("express").Router();

  // Create a new Checkups
  router.post("/", Checkups.create);

  // Retrieve all Aulas
  router.get("/", Checkups.findAll);

  // Retrieve a single Checkups with id
  router.get("/:id", Checkups.findOne);

  // Update a Checkups with id
  router.put("/:id", Checkups.update);

  // Delete a Checkups with id
  router.delete("/:id", Checkups.delete);

  app.use('/api/checkups', router);
};
