const app = require('./src/app')
const db = require('./src/models')

db.sequelize.authenticate()
    .then(() => {
        app.listen(3000, () => console.log('listening to port' , 3000))
    })
    .catch(() => console.log('no se puede conectar'))

