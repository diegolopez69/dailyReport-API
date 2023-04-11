module.exports = app => {
  const Relation_with_inventory = require("../controllers/inventory.controller.js");
  const { authJwt } = require("../middleware");

  var router = require("express").Router();

  // Create a new Relation_with_inventory
  router.post("/", [authJwt.verifyToken, authJwt.isModerator], Relation_with_inventory.create);

  // Retrieve all Inventory
  router.get("/", [authJwt.verifyToken, authJwt.isModerator], Relation_with_inventory.findAll);

  // Retrieve a single Relation_with_inventory with id
  router.get("/:id", [authJwt.verifyToken, authJwt.isModerator], Relation_with_inventory.findOne);

  // Update a Relation_with_inventory with id
  router.put("/:id", [authJwt.verifyToken, authJwt.isModerator], Relation_with_inventory.update);

  // Delete a Relation_with_inventory with id
  router.delete("/:id", [authJwt.verifyToken, authJwt.isModerator], Relation_with_inventory.delete);

  app.use('/api/inventory', router);
};