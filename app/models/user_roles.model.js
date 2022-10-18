module.exports = (sequelize, Sequelize) => {
  const tb_user_roles = sequelize.define("tb_user_roles", {
    UserRoles_id: {
      type:Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  });
  return tb_user_roles;
};
