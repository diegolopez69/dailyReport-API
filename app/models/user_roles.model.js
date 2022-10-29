module.exports = (sequelize, Sequelize) => {
  const tb_user_roles = sequelize.define("tb_user_roles", {
    UserRoles_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    roleId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    userId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
  });
  return tb_user_roles;
};
