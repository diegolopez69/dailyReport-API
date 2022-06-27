module.exports = (sequelize, Sequelize) => {
  const tb_aulas = sequelize.define("tb_aulas", {
    Aula_id: {
      type:Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Planta: {
      type: Sequelize.INTEGER
    },
    Numero: {
      type: Sequelize.INTEGER
    }
  });

  return tb_aulas;
};
 