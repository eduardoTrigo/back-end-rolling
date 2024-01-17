const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const { logger } = require('./logger')
const categoryRouter = require('./routers/category.router')
const productRouter = require('./routers/product.router')

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

mongoose.connect('mongodb+srv://tp3-trigo:tp3-trigo@cluster0.nrsbtqm.mongodb.net/practico?retryWrites=true&w=majority')
    .then(() => logger.info({ message: 'Base de datos conectada'}))
    .catch(() => logger.info({ message: 'Base de datos NO conectada'}))

app.listen(3000, () => logger.info({ message: 'servidor ejecutandoce en el puerto' + 3000, date: new Date().toLocaleString()}))