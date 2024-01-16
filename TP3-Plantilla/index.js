const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const productRouter = require('./routes/product.router')
const {logger} = require('./loggers/index')

const app = express()

app.use(express.json())

// app.use(morgan('common'))

app.use(morgan(function(tokens, req, res){
    const logMessage = {
        method : tokens.method(req, res),
        url : tokens.url(req, res),
        status : tokens.status(req, res),
        rt : tokens['response-time'](req, res) + 'ms'
    }
    return JSON.stringify(logMessage)
}))

app.use('/productos', productRouter)

mongoose.connect('mongodb+srv://tp3_enero:tp3_enero@cluster0.nrsbtqm.mongodb.net/tp3?retryWrites=true&w=majority')
    .then(() => logger.info({ message: 'Base de datos conectada'}))
    .catch(() => logger.error({ message: 'Base de datos NO conectada'}))

app.listen(3000, () => { console.log('app listen to port', 3000) })