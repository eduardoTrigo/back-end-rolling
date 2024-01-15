const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const productRouter = require('./routes/product.router')

const app = express()

app.use(express.json())

app.use(morgan('common'))

app.use('/productos', productRouter)

mongoose.connect('mongodb+srv://tp3_enero:tp3_enero@cluster0.nrsbtqm.mongodb.net/tp3?retryWrites=true&w=majority')
    .then(() => console.log('conectado'))
    .catch(() => console.log('no conectado'))

app.listen(3000, () => { console.log('app listen to port', 3000) })