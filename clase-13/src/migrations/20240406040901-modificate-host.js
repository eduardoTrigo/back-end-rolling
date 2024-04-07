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
    await queryInterface.changeColumn('Hosts','fullname',{
      type: DataTypes.STRING,
      allowNull: false
    })
    await queryInterface.changeColumn('Hosts','age',{
      type: DataTypes.INTEGER,
      allowNull: true
    })
    await queryInterface.changeColumn('Hosts','phoneNumber',{
      type: DataTypes.STRING,
      allowNull:false
    })
    await queryInterface.changeColumn('Hosts','email', {
      type: DataTypes.STRING,
      allowNull: true
    })
  },

  /**
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').Sequelize} Sequelize
   * @param {Promise<void>}
  */
  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Hosts','fullname', DataTypes.STRING)
    await queryInterface.changeColumn('Hosts','age', DataTypes.INTEGER)
    await queryInterface.changeColumn('Hosts','phoneNumber', DataTypes.STRING)
    await queryInterface.changeColumn('Hosts','email',DataTypes.STRING)
  }
};
