const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const { logger } = require('./logger')
const categoryRouter = require('./routers/category.router')
const productRouter = require('./routers/product.router')
const { MONGO_CONFIG, EXPRESS_CONFIG } = require('./config')

const app = express()

app.use(express.json())


app.use(morgan('dev'))

// app.use(morgan(function(tokens, req, res){
    //     const logMessage = {
        //         method : tokens.method(req, res),
        //         url : tokens.url(req, res),
        //         status : tokens.status(req, res),
        //         rt : tokens['response-time'](req, res) + 'ms'
        //     }
        //     return JSON.stringify(logMessage)
        // }))
        
app.use('/productos', productRouter)
app.use('/categorias', categoryRouter)

mongoose.connect(MONGO_CONFIG.URI)
    .then(() => logger.info({ message: 'Base de datos conectada'}))
    .catch(() => logger.info({ message: 'Base de datos NO conectada'}))

app.listen(EXPRESS_CONFIG.PORT, () => logger.info({ message: 'servidor ejecutandoce en el puerto' + EXPRESS_CONFIG.PORT, date: new Date().toLocaleString()}))