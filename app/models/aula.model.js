module.exports = (sequelize, Sequelize) => {
  // Define the "tb_classrooms" model
  const tb_classrooms = sequelize.define("tb_classrooms", {
    // "Aula_id" field is the primary key and is auto-incrementing
    Aula_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    // "Planta" field is an integer
    Planta: {
      type: Sequelize.INTEGER,
    },
    // "Numero" field is an integer
    Numero: {
      type: Sequelize.INTEGER,
    },
  });

  return tb_classrooms;
};
