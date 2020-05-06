'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("employees",{
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
  
      firstname:{
        type: Sequelize.STRING,
        allowNull: false,
    },
      lastname:{
        type: Sequelize.STRING,
        allowNull: false,
    },
      email: Sequelize.STRING,
      phone: Sequelize.BIGINT,
      companyId: {
        type: Sequelize.INTEGER,
      
        
      },
  createdAt:Sequelize.DATE,
  updatedAt:Sequelize.DATE,

    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("employees");
  }
};
