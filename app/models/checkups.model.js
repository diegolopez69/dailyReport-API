const aho = require("./aho.model.js");

module.exports = (sequelize, Sequelize) => {
  const tb_checkups = sequelize.define("tb_checkups", {
    Checkup_id: {
      type:Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Review: {
      type: Sequelize.BOOLEAN,
      defaulValue: false,
      //[Op.not]: null, 
    },
    Comments: {
      type: Sequelize.STRING,
      
    },
    there_is: {
      type: Sequelize.BOOLEAN,
      defaulValue: false,
      
    },
    Works: {
      type: Sequelize.BOOLEAN,
      defaulValue: false,
    },
    Theoretical_amount: {
      type: Sequelize.INTEGER,
    },
    Actual_amount: {
      type: Sequelize.INTEGER,
    },
  });


  tb_checkups.associate = function (models) {
    tb_checkups.belongsTo(models.tb_aula_herramienta_ordenador, {
        foreignKey: 'Aho_id'
    })
 };     


  return tb_checkups;
};
 