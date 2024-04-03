'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  /**
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').Sequelize} Sequelize
   * @param {Promise<void>}
  */
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      firstname: 'nombre1',
      lastname: 'apellido1',
      password: 'pass1',
      dni: '31030627',
      age: '31',
      email: 'nombre1@gmail.com'
    },
    {
      firstname: 'nombre2',
      lastname: 'apellido2',
      password: 'pass2',
      dni: '14661452',
      age: '57',
      email: 'nombre2@gmail.com'
    },
    ])
  },


  /**
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').Sequelize} Sequelize
   * @param {Promise<void>}
  */
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {})
  }
};
