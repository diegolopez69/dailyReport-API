module.exports = (sequelize, Sequelize) => {
  // Define the "tb_inventories" model
  const tb_inventories = sequelize.define(
    "tb_inventories",
    {
      // "Inventory_id" field is the primary key and is auto-incrementing
      Inventory_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      // "Classroom_id" field is an integer
      Classroom_id: {
        type: Sequelize.INTEGER,
      },
      // "Computer_id" field is an integer
      Computer_id: {
        type: Sequelize.INTEGER,
      },
      // "Tool_id" field is an integer
      Tool_id: {
        type: Sequelize.INTEGER,
      },
    }
  );

  // Define associations for the "tb_inventories" model
  tb_inventories.associate = function (models) {
    // "tb_inventories" belongs to the "tb_classrooms" model (1-to-1 relationship)
    tb_inventories.belongsTo(models.tb_classrooms, {
      foreignKey: "Classroom_id",
    }),
      // "tb_inventories" belongs to the "tb_tools" model (1-to-1 relationship)
      tb_inventories.belongsTo(models.tb_tools, {
        foreignKey: "Tool_id",
      }),
      // "tb_inventories" belongs to the "tb_computers" model (1-to-1 relationship)
      tb_inventories.belongsTo(models.tb_computers, {
        foreignKey: "Computer_id",
        // Alias the foreign key as "computer"
        as: "computer",
      });
  };

  return tb_inventories;
};
