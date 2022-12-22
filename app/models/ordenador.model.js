module.exports = (sequelize, Sequelize) => {
  // Define a model for the tb_computers table
  const tb_computers = sequelize.define("tb_computers", {
    // Define the Ordenador_id column
    Ordenador_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    // Define the Nombre column
    Nombre: {
      type: Sequelize.STRING,
    },
  });

  return tb_computers;
};
