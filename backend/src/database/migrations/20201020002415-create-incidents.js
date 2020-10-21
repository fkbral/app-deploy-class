'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('incidents', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrements: true,
        primaryKey: true,
      },
      ngo_id: {
        references: { model: 'ngos', key: 'id'},
        type: Sequelize.STRING,
        allowNull: true,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      value: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      update_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('incidents');
  }
};
