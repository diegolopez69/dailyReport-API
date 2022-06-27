module.exports = (sequelize, Sequelize) => {
  const tb_classrooms = sequelize.define("tb_classrooms", {
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

  return tb_classrooms;
};
 