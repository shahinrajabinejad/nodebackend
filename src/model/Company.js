var Sequelize = require('sequelize');
var sequelize = require('./database');

var Company = sequelize.define('company', {

    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,

    },
    logo: Sequelize.STRING,
    website: Sequelize.STRING,

}, {
    timestamps: false,
});

module.exports = Company