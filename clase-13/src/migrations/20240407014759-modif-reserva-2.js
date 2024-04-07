'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  /**
* @param {import('sequelize').QueryInterface} queryInterface
* @param {import('sequelize').Sequelize} Sequelize
* @param {Promise<void>}
*/
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Reservations', 'hostId', {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Hosts',
        key: 'id'
      }
    })
    await queryInterface.changeColumn('Reservations', 'tableId', {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Tables',
        key: 'id'
      }
    })
    await queryInterface.addColumn('Reservations','confirmed',{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    })
  },

  /**
* @param {import('sequelize').QueryInterface} queryInterface
* @param {import('sequelize').Sequelize} Sequelize
* @param {Promise<void>}
*/
  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Reservations','hostId',DataTypes.INTEGER)
    await queryInterface.changeColumn('Reservations','tableId',DataTypes.INTEGER)
    await queryInterface.removeColumn('Reservations', 'confirmed')
  }
};
