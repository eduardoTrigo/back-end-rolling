const express = require('express')
const { default: mongoose } = require('mongoose')
const morgan = require('morgan')
const jugadorRouter = require('./routes/jugador.router')

const app = express()

app.use(express.json())

app.use(morgan('dev'))

app.use('/jugador', jugadorRouter )



mongoose.connect('mongodb+srv://tp4-trigo:tp4-trigo@cluster0.nrsbtqm.mongodb.net/rolling-dt?retryWrites=true&w=majority')
    .then(()=>console.log('conectado'))
    .catch(()=>console.log('NO conectado'))

app.listen(3000,()=>console.log('app listen to port', 3000))
    