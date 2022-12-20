module.exports = (sequelize, Sequelize) => {
  // Define the "tb_tools" model
  const tb_tools = sequelize.define("tb_tools", {
    // "Herramienta_id" field is the primary key and is auto-incrementing
    Herramienta_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    // "Tipo" field is an enumerated type with possible values "Hardware" or "Software"
    Tipo: {
      type: Sequelize.ENUM("Hardware", "Software"),
    },
    // "Nombre" field is a string
    Nombre: {
      type: Sequelize.STRING,
    },
  });

  return tb_tools;
};
