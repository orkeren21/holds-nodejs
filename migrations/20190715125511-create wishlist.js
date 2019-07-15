'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('wishlists', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            opportunitySFID: {
              type: Sequelize.STRING,
              allowNull: false,
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            deletedAt: {
              type: Sequelize.DATE,
              allowNull: true,
            }
        }).then(() => queryInterface.addIndex('wishlists', ['opportunitySFID']));
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('wishlists');
  }
}

