const { DataTypes, Sequelize } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        Id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
        Tipo: { type: Sequelize.ENUM("Software", "Hardware"), allowNull: false },
        Nombre: { type: DataTypes.STRING, allowNull: false }
    };  

    return sequelize.define('Herramienta', attributes);
}