module.exports = (app) => {
  const Checkups = require("../controllers/checkups.controller.js");
  const { authJwt } = require("../middleware");

  var router = require("express").Router();

  // Create a new Checkups
  router.post("/", [authJwt.verifyToken], Checkups.create);

  // Create a negative Checkup
  router.post(
    "/negative",
    [authJwt.verifyToken],
    Checkups.createNegative
  );

  // Retrieve all Classrooms
  router.get("/", [authJwt.verifyToken], Checkups.findAll);

  // Retrieve a single Checkups with id
  router.get(
    "/:id",
    [authJwt.verifyToken],
    Checkups.findOne
  );

  // Update a Checkups with id
  router.put(
    "/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    Checkups.update
  );

  // Delete a Checkups with id
  router.delete(
    "/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    Checkups.delete
  );

  // Delete a Checkups with id and number of the week
  router.delete(
    "/delete/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    Checkups.deleteCheckupByWeek
  );

  app.use("/api/checkups", router);
};
