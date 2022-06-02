module.exports = (sequelize, Sequelize) => {
  const tb_aulas2 = sequelize.define("tb_aulas2", {
    Planta: {
      type: Sequelize.INTEGER
    },
    Numero: {
      type: Sequelize.INTEGER
    }
  });

  return tb_aulas2;
};
