module.exports = (sequelize, Sequelize) => {
    const tb_aula_herramienta_ordenador = sequelize.define("tb_aula_herramienta_ordenador", {
        Aula_id: {
            type: Sequelize.INTEGER
          },
        Ordenador_id: {
          type: Sequelize.INTEGER        
        },
        Herramienta_id: {
          type: Sequelize.INTEGER
        }
      });
      tb_aula_herramienta_ordenador.associate = function (models) {
        tb_aula_herramienta_ordenador.belongsTo(models.tb_aulas, {
            foreignKey: 'Aula_id'
        }),
        tb_aula_herramienta_ordenador.belongsTo(models.tb_herramientas3, {
          foreignKey: 'Herramienta_id'
        }),
        tb_aula_herramienta_ordenador.belongsTo(models.tb_ordenadors, {
          foreignKey: 'Ordenador_id',
          as: "ordenador"
        })

     };     

    return tb_aula_herramienta_ordenador;
  };
  