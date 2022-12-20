module.exports = (sequelize, Sequelize) => {
    const tb_aula_herramienta_ordenador = sequelize.define("tb_aula_herramienta_ordenador", {
      Aho_id: {
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },  
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
        tb_aula_herramienta_ordenador.belongsTo(models.tb_classrooms, {
            foreignKey: 'Aula_id'
        }),
        tb_aula_herramienta_ordenador.belongsTo(models.tb_tools, {
          foreignKey: 'Herramienta_id'
        }),
        tb_aula_herramienta_ordenador.belongsTo(models.tb_computers, {
          foreignKey: 'Ordenador_id',
          as: "ordenador"
        })
     };

    return tb_aula_herramienta_ordenador;
  };