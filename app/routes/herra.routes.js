module.exports = app => {
  const Tool = require("../controllers/herramientas.controller.js");
  const { authJwt } = require("../middleware");

  var router = require("express").Router();

  // Create a new Herra
  router.post("/", [authJwt.verifyToken, authJwt.isModerator], Tool.create);

  // Retrieve all Herras
  router.get("/", [authJwt.verifyToken, authJwt.isModerator], Tool.findAll);

  // Retrieve a single Herra with id
  router.get("/:id", [authJwt.verifyToken, authJwt.isModerator], Tool.findOne);

  // Update a Herra with id
  router.put("/:id", [authJwt.verifyToken, authJwt.isModerator], Tool.update);

  // Delete a Herra with id
  router.delete("/:id", [authJwt.verifyToken, authJwt.isModerator], Tool.delete);
  
  app.use('/api/tool', router);
};
