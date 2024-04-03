'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstname: {
        type: Sequelize.STRING,
        allowNull:false
      },
      lastname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull:false
      },
      dni: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      age: {
        type: Sequelize.INTEGER,
        defaultValue: 18
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  // DOWN - REVERSION DE LOS CAMBIOS - SI O SI HAY QUE GENERAR
  // EL CODIGO QUE VUELVA PARA ATRAS LA MIGRACION REALIZADA
  /**
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').Sequelize} Sequelize
   * @param {Promise<void>}
  */
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};