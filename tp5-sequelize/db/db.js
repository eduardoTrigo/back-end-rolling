const { Sequelize } = require("sequelize");
const { DB_CONFIG } = require("../config/config");

const sequelize = new Sequelize(DB_CONFIG.NAME, DB_CONFIG.USER, DB_CONFIG.PASS, {
    host: DB_CONFIG.HOST,
    port : DB_CONFIG.PORT,
    dialect:'mysql'
})

// const Task = TaskModelCreator(sequelize)
// Task.sync({ force: true })

// const Owner = OwnerModelCreator(sequelize)
// Owner.sync({ force: true })

module.exports = {
    sequelize,
    // Task,
    // Owner
}