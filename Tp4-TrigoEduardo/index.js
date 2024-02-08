const express = require('express')
const { default: mongoose } = require('mongoose')
const morgan = require('morgan')
const { MONGO_CONFIG, EXPRESS_CONFIG } = require('./config')
const { logger } = require('./logger')
const jugadorRouter = require('./routes/jugador.router')
const tecnicoRouter = require('./routes/tecnico.router')
const transactionRouter = require('./routes/transaction.router')

const app = express()

app.use(express.json())

app.use(morgan('dev'))

app.use('/jugador', jugadorRouter)
app.use('/tecnico', tecnicoRouter)
app.use('/transactions', transactionRouter)



// mongoose.connect('mongodb+srv://tp4-trigo:tp4-trigo@cluster0.nrsbtqm.mongodb.net/rolling-dt?retryWrites=true&w=majority')
//     .then(() => console.log('conectado'))
//     .catch(() => console.log('NO conectado'))

mongoose.connect(MONGO_CONFIG.URI)
    .then(() => logger.info({ message: 'base de datos conectada' }))
    .catch(() => logger.error({ message: 'base de datos NO conectada' }))

app.listen(EXPRESS_CONFIG.PORT,
    () => logger.info(
        {
            message: 'Server listen to port ' + EXPRESS_CONFIG.PORT,
            date: new Date().toLocaleString()
        }
    )
)
