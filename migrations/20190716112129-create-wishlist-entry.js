'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('wishlistEntries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      wishlistId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      reservableUUID: {
        type: Sequelize.UUID,
        allowNull: false
      },
      createdBy: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        onUpdate : Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    }).then(() => queryInterface.addIndex('wishlistEntries', ['reservableUUID', 'wishlistId']));
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('wishlistEntries');
  }
};