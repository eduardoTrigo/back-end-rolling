'use strict';

const { DataTypes } = require('sequelize')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    /**
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').Sequelize} Sequelize
   * @param {Promise<void>}
  */
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'email',{
      type: DataTypes.STRING,
      allowNull: false
    })
  },

   /**
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').Sequelize} Sequelize
   * @param {Promise<void>}
  */
  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'email')
  }
};
