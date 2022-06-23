module.exports = (sequelize, Sequelize) => {
  const tb_ordenadors = sequelize.define("tb_ordenadors", {
    Ordenador_id: {
      type:Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Nombre: {
      type: Sequelize.STRING
    }
  });

  return tb_ordenadors;
};
