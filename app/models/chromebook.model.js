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
      type:Sequelize.INTEGER
    },
    No_armario: {
      type:Sequelize.INTEGER
    },
    No_chr_funcionales: {
      type:Sequelize.INTEGER
    },
    No_chr_no_funcionales: {
      type:Sequelize.INTEGER
    },
    No_chr_totales: {
      type:Sequelize.INTEGER
    },
  });

  return tb_chromebooks;
};
