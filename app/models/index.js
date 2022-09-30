const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,
  logging: 0,

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

db.tb_computers = require("./ordenador.model.js")(sequelize, Sequelize);
db.tb_classrooms = require("./aula.model.js")(sequelize, Sequelize);
db.tb_tools = require("./herramientas.model.js")(sequelize, Sequelize);
db.tb_aula_herramienta_ordenador = require("./aho.model.js")(sequelize, Sequelize);
db.user = require("./user.model.js")(sequelize, Sequelize);
db.role = require("./role.model.js")(sequelize, Sequelize);
db.tb_checkups = require("./checkups.model.js")(sequelize, Sequelize);
db.tb_chromebook = require("./chromebook.model.js")(sequelize, Sequelize);


db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});
db.ROLES = ["user", "admin", "moderator"];
db.tb_aula_herramienta_ordenador.associate(db)
db.tb_checkups.associate(db)



module.exports = db;
