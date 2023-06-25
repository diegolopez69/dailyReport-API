module.exports = app => {
  const Tool = require("../controllers/tool.controller.js");
  const { authJwt } = require("../middleware");

  var router = require("express").Router();

  // Create a new Tool
  router.post("/", [authJwt.verifyToken, authJwt.isAdmin], Tool.create);

  // Retrieve all Tools
  router.get("/", [authJwt.verifyToken], Tool.findAll);

  // Retrieve a single Tool with id
  router.get("/:id", [authJwt.verifyToken], Tool.findOne);

  // Update a Tool with id
  router.put("/:id", [authJwt.verifyToken, authJwt.isModerator], Tool.update);

  // Delete a Tool with id
  router.delete("/:id", [authJwt.verifyToken, authJwt.isAdmin], Tool.delete);
  
  app.use('/api/tool', router);
};