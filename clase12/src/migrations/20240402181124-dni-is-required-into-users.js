'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  /**
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').Sequelize} Sequelize
   * @param {Promise<void>}
  */
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Users', 'dni',{
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    })
  },
  /**
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').Sequelize} Sequelize
   * @param {Promise<void>}
  */
  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Users', 'dni',{
      type: Sequelize.INTEGER,
      allowNull: true
    })
  }
};
