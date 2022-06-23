module.exports = (sequelize, Sequelize) => {
  const tb_ordenador_aulas = sequelize.define("tb_ordenador_aulas", {
    Prueba: {
      type: Sequelize.STRING
    }
  });

  return tb_ordenador_aulas;
};
 