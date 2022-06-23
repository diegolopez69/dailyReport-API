const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tb_ordenadors = require("./ordenador.model.js")(sequelize, Sequelize);
db.tb_aulas2 = require("./aula.model.js")(sequelize, Sequelize);
db.tb_herramientas3 = require("./herramientas.model.js")(sequelize, Sequelize);
db.tb_aula_herramienta_ordenador1 = require("./aho.model.js")(sequelize, Sequelize);

db.tb_aula_herramienta_ordenador1.associate(db)



db.tb_ordenador_aulas = require("./ordenador_aulas.model.js")(sequelize, Sequelize);

module.exports = db;
