module.exports = (sequelize, Sequelize) => {
  // Define a model for the tb_computers table
  const tb_computers = sequelize.define("tb_computers", {
    // Define the Computer_id column
    Computer_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    // Define the Name column
    Name: {
      type: Sequelize.STRING,
    },
    // Define the Serie column
    Serie: {
      type: Sequelize.STRING,
    },
  });

  return tb_computers;
};
