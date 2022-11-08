module.exports = app => {
  const Room = require("../controllers/aula.controller.js");
  const { authJwt } = require("../middleware");

  var router = require("express").Router();

  // Cuantos chromebook's se tienen a lo largo del tiempo (gráfica)ß
  router.post("/", [authJwt.verifyToken, authJwt.isModerator], Room.create);

  // Mostrar cuantos chromebook's son funcionales
  router.get("/", [authJwt.verifyToken, authJwt.isModerator], Room.findAll);

  // Mostrar la cantidad de teclados, ratones y ordenadores que se tienen
  router.get("/:id", [authJwt.verifyToken, authJwt.isModerator], Room.findOne);

  // Mostrar cuantos ordenadores se tienen en cada aula
  router.put("/:id", [authJwt.verifyToken, authJwt.isModerator], Room.update);

  // Delete a Room with id
  router.delete("/:id", [authJwt.verifyToken, authJwt.isModerator], Room.delete);

  app.use('/api/room', router);
};
 