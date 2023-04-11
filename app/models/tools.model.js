module.exports = (sequelize, Sequelize) => {
  // Define the "tb_tools" model
  const tb_tools = sequelize.define("tb_tools", {
    // "Tool_id" field is the primary key and is auto-incrementing
    Tool_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    // "Type" field is an enumerated type with possible values "Hardware" or "Software"
    Type: {
      type: Sequelize.ENUM("Hardware", "Software"),
    },
    // "Name" field is a string
    Name: {
      type: Sequelize.STRING,
    },
  });

  return tb_tools;
};
