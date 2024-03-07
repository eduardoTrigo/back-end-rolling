const app = require('./src/app')
const { SERVER_CONFIG } = require('./src/config/config')
const { sequelize } = require('./src/db/db')

sequelize.authenticate()
    .then(async () => {
        app.listen(SERVER_CONFIG.PORT, () => console.log('listen at port', SERVER_CONFIG.PORT))
    })
    .catch((err) => {
        console.log(err)
    })