module.exports = (sequelize, Sequelize) => {
  const tb_tools = sequelize.define("tb_tools", {
    Herramienta_id: {
      type:Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Tipo: {
      type: Sequelize.ENUM("Hardware", "Software"),
    },
    Nombre: {
      type: Sequelize.STRING
    }
  });

  return tb_tools;
};
