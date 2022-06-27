module.exports = (sequelize, Sequelize) => {
  const tb_computers = sequelize.define("tb_computers", {
    Ordenador_id: {
      type:Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Nombre: {
      type: Sequelize.STRING
    }
  });

  return tb_computers;
};
