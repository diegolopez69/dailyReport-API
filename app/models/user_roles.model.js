module.exports = (sequelize, Sequelize) => {

  const tb_user_roles = sequelize.define("tb_user_roles", {
    UserRoles_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  });

  // role.belongsToMany(db.user, {
  //   through: "tb_user_roles",
  //   foreignKey: "roleId",
  //   otherKey: "userId"
  // }),

  // user.belongsToMany(db.role, {
  //   through: "tb_user_roles",
  //   foreignKey: "userId",
  //   otherKey: "roleId"
  // }),


//   tb_user_roles.associate = function (models) {
//     role.belongsToMany(models.user, {
//       through: "tb_user_roles",
//       foreignKey: "roleId",
//       otherKey: "userId"
//     }),

//       user.belongsToMany(models.role, {
//         through: "tb_user_roles",
//         foreignKey: "userId",
//         otherKey: "roleId"
//       })
//  };


// roles.belongsToMany(users, { through: tb_user_roles });
// users.belongsToMany(roles, { through: tb_user_roles });

// roles.hasMany(tb_user_roles);
// tb_user_roles.belongsTo(roles);

// users.hasMany(tb_user_roles);
// tb_user_roles.belongsTo(users);

  return tb_user_roles;
};
