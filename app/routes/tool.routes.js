module.exports = app => {
  const Tool = require("../controllers/tool.controller.js");
  const { authJwt } = require("../middleware");

  var router = require("express").Router();

  // Create a new Tool
  router.post("/", [authJwt.verifyToken, authJwt.isModerator], Tool.create);

  // Retrieve all Tools
  router.get("/", [authJwt.verifyToken, authJwt.isModerator], Tool.findAll);

  // Retrieve a single Tool with id
  router.get("/:id", [authJwt.verifyToken, authJwt.isModerator], Tool.findOne);

  // Update a Tool with id
  router.put("/:id", [authJwt.verifyToken, authJwt.isModerator], Tool.update);

  // Delete a Tool with id
  router.delete("/:id", [authJwt.verifyToken, authJwt.isModerator], Tool.delete);
  
  app.use('/api/tool', router);
};
