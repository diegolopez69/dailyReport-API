module.exports = (sequelize, Sequelize) => {
  // Define the "tb_aula_herramienta_ordenador" model
  const tb_aula_herramienta_ordenador = sequelize.define(
    "tb_aula_herramienta_ordenador",
    {
      // "Aho_id" field is the primary key and is auto-incrementing
      Aho_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      // "Aula_id" field is an integer
      Aula_id: {
        type: Sequelize.INTEGER,
      },
      // "Ordenador_id" field is an integer
      Ordenador_id: {
        type: Sequelize.INTEGER,
      },
      // "Herramienta_id" field is an integer
      Herramienta_id: {
        type: Sequelize.INTEGER,
      },
    }
  );

  // Define associations for the "tb_aula_herramienta_ordenador" model
  tb_aula_herramienta_ordenador.associate = function (models) {
    // "tb_aula_herramienta_ordenador" belongs to the "tb_classrooms" model (1-to-1 relationship)
    tb_aula_herramienta_ordenador.belongsTo(models.tb_classrooms, {
      foreignKey: "Aula_id",
    }),
      // "tb_aula_herramienta_ordenador" belongs to the "tb_tools" model (1-to-1 relationship)
      tb_aula_herramienta_ordenador.belongsTo(models.tb_tools, {
        foreignKey: "Herramienta_id",
      }),
      // "tb_aula_herramienta_ordenador" belongs to the "tb_computers" model (1-to-1 relationship)
      tb_aula_herramienta_ordenador.belongsTo(models.tb_computers, {
        foreignKey: "Ordenador_id",
        // Alias the foreign key as "ordenador"
        as: "ordenador",
      });
  };

  return tb_aula_herramienta_ordenador;
};
