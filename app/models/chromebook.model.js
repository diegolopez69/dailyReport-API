module.exports = (sequelize, Sequelize) => {
  const tb_chromebooks = sequelize.define("tb_chromebooks", {
    Chromebook_id: {
      type:Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Estado: {
      type: Sequelize.BOOLEAN,
      defaulValue: false,
    },
    Descripcion: {
      type: Sequelize.STRING
    },
    No_chromebook: {
      type:Sequelize.INTEGER
    },
    No_sn: {
      type:Sequelize.STRING
    },
    No_armario: {
      type:Sequelize.INTEGER
    }
  });

  return tb_chromebooks;
};
