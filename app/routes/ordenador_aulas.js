module.exports = app => {
    const OrdenadorAulas = require("../controllers/ordenador_aulas.controller");
  
    var router = require("express").Router();
  
    // Create a new OrdenadorAulas
    router.post("/", OrdenadorAulas.create);
  
    // Retrieve all Aulas
    router.get("/", OrdenadorAulas.findAll);
  
    // Retrieve a single OrdenadorAulas with id
    router.get("/:id", OrdenadorAulas.findOne);
  
    // Update a OrdenadorAulas with id
    router.put("/:id", OrdenadorAulas.update);
  
    // Delete a OrdenadorAulas with id
    router.delete("/:id", OrdenadorAulas.delete);
  
    app.use('/api/ordenadorAula', router);
  };
  