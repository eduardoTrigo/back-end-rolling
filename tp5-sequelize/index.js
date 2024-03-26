const { SERVER_CONFIG } = require("./config/config");
const express = require('express')
const { sequelize } = require("./db/db");

const app = express()

sequelize.authenticate()
    .then(async () => {
        console.log('base de datos conectada')
        app.listen(SERVER_CONFIG.PORT, () => console.log('listening at port', SERVER_CONFIG.PORT))
})
