"use strict";
const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require("../../config/config.json")[env];
const db = {};

let sequelize;

// Check if a connection URL is provided in the configuration
if (config.use_env_variable) {
  // If a connection URL is provided, use it to create a new Sequelize instance
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  // If no connection URL is provided, use the database, username, and password from the configuration to create a new Sequelize instance
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

// Read all the files in the current directory
const files = fs.readdirSync(__dirname);

// Filter the list of files to only include .js files that are not the current file and do not start with a dot
const models = files.filter((file) => {
  return (
    file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  );
});

// For each model file, import the model module and store it in the db object, using the model name as the key
models.forEach((file) => {
  const model = require(path.join(__dirname, file))(
    sequelize,
    Sequelize.DataTypes
  );
  db[model.name] = model;
});

// For each model in the db object, if the model has an associate function, call it with the db object as an argument
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Add the Sequelize library and the sequelize instance to the db object
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import and add the model to the db object
db.tb_computers = require("./computer.model.js")(sequelize, Sequelize);
db.tb_classrooms = require("./classroom.model.js")(sequelize, Sequelize);
db.tb_tools = require("./tools.model.js")(sequelize, Sequelize);
db.tb_inventories = require("./inventory.model.js")(
  sequelize,
  Sequelize
);
db.user = require("./user.model.js")(sequelize, Sequelize);
db.role = require("./role.model.js")(sequelize, Sequelize);
db.tb_checkups = require("./checkups.model.js")(sequelize, Sequelize);
db.tb_chromebook = require("./chromebook.model.js")(sequelize, Sequelize);
db.tb_user_roles = require("./user_roles.model.js")(sequelize, Sequelize);

// Set up a many-to-many relationship between the role and user models using the tb_user_roles model as the through model
db.role.belongsToMany(db.user, {
  // Specify the name of the through model
  through: "tb_user_roles",
  foreignKey: "roleId",
  otherKey: "userId",
});

// Set up the inverse of the many-to-many relationship between the user and role models
db.user.belongsToMany(db.role, {
  // Use the same through model and foreign key names as the previous association
  through: "tb_user_roles",
  foreignKey: "userId",
  otherKey: "roleId",
});

// Set up a one-to-many relationship between the tb_classrooms and tb_chromebook models
db.tb_classrooms.hasMany(db.tb_chromebook);

db.ROLES = ["user", "admin", "moderator"];
db.tb_inventories.associate(db);
db.tb_checkups.associate(db);

module.exports = db;
