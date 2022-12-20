module.exports = (sequelize, Sequelize) => {
  // Define the "tb_chromebooks" model
  const tb_chromebooks = sequelize.define("tb_chromebooks", {
    // "Chromebook_id" field is the primary key and is auto-incrementing
    Chromebook_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    // "Estado" field is a boolean with a default value of "false"
    Estado: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    // "Descripcion" field is a string
    Descripcion: {
      type: Sequelize.STRING,
    },
    // "No_chromebook" field is an integer
    No_chromebook: {
      type: Sequelize.INTEGER,
    },
    // "No_sn" field is a string
    No_sn: {
      type: Sequelize.STRING,
    },
    // "No_armario" field is an integer
    No_armario: {
      type: Sequelize.INTEGER,
    },
  });

  return tb_chromebooks;
};
