module.exports = (sequelize, Sequelize) => {
  const tb_herramientas = sequelize.define("tb_herramientas", {
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

  return tb_herramientas;
};
