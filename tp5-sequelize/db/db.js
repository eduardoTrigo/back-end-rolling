const { Sequelize, DataTypes } = require("sequelize");
const { DB_CONFIG } = require("../config/config");

const sequelize = new Sequelize(DB_CONFIG.NAME, DB_CONFIG.USER, DB_CONFIG.PASS, {
    host: DB_CONFIG.HOST,
    port : DB_CONFIG.PORT,
    dialect:'mysql'
})

const Task = sequelize.define('Task',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    task:{
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    }
})


const Owner = sequelize.define('Owner',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull:false
    },
    age: {
        type: DataTypes.INTEGER,
        defaultValue:18
    }
})

Owner.hasMany(Task)
Task.belongsTo(Owner)

//  

// const Task = TaskModelCreator(sequelize)

// const Owner = OwnerModelCreator(sequelize)
// Owner.sync({ force: true })

module.exports = {
    sequelize,
    Task,
    // Owner
}