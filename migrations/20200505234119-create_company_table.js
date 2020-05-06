'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("companies",{
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
    createdAt:Sequelize.DATE,
  updatedAt:Sequelize.DATE,

    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("companies");
  }
};
