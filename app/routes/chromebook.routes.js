module.exports = app => {
  const Chromebook = require("../controllers/chromebook.controller.js");
  const { authJwt } = require("../middleware");

  var router = require("express").Router();

  // Create a new chromebook
  router.post("/", [authJwt.verifyToken, authJwt.isModerator], Chromebook.create);

  // Retrieve all chromebooks
  router.get("/", [authJwt.verifyToken, authJwt.isModerator], Chromebook.findAll);

  // Retrieve a single chromebook with id
  router.get("/:id", [authJwt.verifyToken, authJwt.isModerator], Chromebook.findOne);

  // Update a chromebook with id
  router.put("/:id", [authJwt.verifyToken, authJwt.isModerator], Chromebook.update);

  // Delete a chromebook with id
  router.delete("/:id", [authJwt.verifyToken, authJwt.isModerator], Chromebook.delete);
  
  app.use('/api/chromebook', router);
};
