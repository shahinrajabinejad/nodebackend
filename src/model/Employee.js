//import sequelize
var Sequelize = require('sequelize');
// importing connection database
var sequelize = require('./database');
// import model for FK roleID
var Company = require('./Company');

var Employee = sequelize.define('employee', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  //•	Employees DB table consists of these fields: First name (required), last name (required), Company (foreign key to Companies), email, phone
  firstname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: Sequelize.STRING,
  phone: Sequelize.BIGINT,
  companyId: {
    type: Sequelize.INTEGER,
    // This is a reference to another model
    references: {
      model: Company,
      key: 'id'
    }
  }
}, {
  timestamps: false,
});

Employee.belongsTo(Company)

module.exports = Employee