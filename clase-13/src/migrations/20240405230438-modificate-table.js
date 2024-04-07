'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  /**
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').Sequelize} Sequelize
   * @param {Promise<void>}
  */
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Tables', 'quantity',{
      type: DataTypes.INTEGER,
      allowNull: false
    })
    await queryInterface.changeColumn('Tables', 'place' , {
      type: DataTypes.TEXT,
      allowNull: false
    })
  },

  /**
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').Sequelize} Sequelize
   * @param {Promise<void>}
  */
  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Tables', 'quantity', DataTypes.INTEGER)
    await queryInterface.changeColumn('Tables','place', DataTypes.TEXT)
  }
};
