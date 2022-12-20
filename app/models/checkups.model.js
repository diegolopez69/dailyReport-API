const aho = require("./aho.model.js");

module.exports = (sequelize, Sequelize) => {
  // Define the "tb_checkups" model
  const tb_checkups = sequelize.define("tb_checkups", {
    // "Checkup_id" field is the primary key and is auto-incrementing
    Checkup_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    // "Review" field is a boolean with a default value of "false"
    Review: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    // "Comments" field is a string
    Comments: {
      type: Sequelize.STRING,
    },
    // "there_is" field is a boolean with a default value of "false"
    there_is: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    // "Works" field is a boolean with a default value of "false"
    Works: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    // "Theoretical_amount" field is an integer
    Theoretical_amount: {
      type: Sequelize.INTEGER,
    },
    // "Actual_amount" field is an integer
    Actual_amount: {
      type: Sequelize.INTEGER,
    },
  });

  // Define association for the "tb_checkups" model
  tb_checkups.associate = function (models) {
    // "tb_checkups" belongs to the "tb_aula_herramienta_ordenador" model (1-to-1 relationship)
    tb_checkups.belongsTo(models.tb_aula_herramienta_ordenador, {
      foreignKey: "Aho_id",
    });
  };

  return tb_checkups;
};
