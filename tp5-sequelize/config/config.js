require('dotenv').config()

module.exports = {
    SERVER_CONFIG: {
        PORT: process.env.SERVER_PORT || 3000
    },
    DB_CONFIG: {
        NAME: process.env.DB_NAME,
        USER: process.env.DB_USER,
        PASS: process.env.DB_PASS,
        HOST: process.env.DB_HOST,
        PORT: process.env.DB_PORT,
    }
}