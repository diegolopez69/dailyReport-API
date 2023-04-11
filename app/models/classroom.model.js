module.exports = (sequelize, Sequelize) => {
  // Define the "tb_classrooms" model
  const tb_classrooms = sequelize.define("tb_classrooms", {
    // "Classroom_id" field is the primary key and is auto-incrementing
    Classroom_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    // "Floor" field is an integer
    Floor: {
      type: Sequelize.INTEGER,
    },
    // "Number" field is an integer
    Number: {
      type: Sequelize.INTEGER,
    },
  });

  return tb_classrooms;
};
