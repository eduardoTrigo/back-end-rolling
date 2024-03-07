const { Sequelize } = require("sequelize");
const { DB_CONFIG } = require('../config/config')


const sequelize = new Sequelize(DB_CONFIG.NAME, DB_CONFIG.USER, DB_CONFIG.PASS,{
    host: DB_CONFIG.HOST,
    port: DB_CONFIG.PORT,    //opcional
    dialect: 'mysql'
})

//------------------------

const Task = TaskModelCreator(sequelize)
Task.

module.exports = {
    sequelize
}