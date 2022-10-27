'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require('../../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

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
db.tb_user_roles = require("./user_roles.model.js")(sequelize, Sequelize);


db.role.belongsToMany(db.user, {
  through: "tb_user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});

db.user.belongsToMany(db.role, {
  through: "tb_user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

//------------------------------------------------------------

// db.role.belongsToMany(db.user, {
//   through: "user_roles",
//   foreignKey: "roleId",
//   otherKey: "userId"
// });

// db.user.belongsToMany(db.role, {
//   through: "user_roles",
//   foreignKey: "userId",
//   otherKey: "roleId"
// });

db.ROLES = ["user", "admin", "moderator"];
db.tb_aula_herramienta_ordenador.associate(db)
db.tb_checkups.associate(db)



module.exports = db;
