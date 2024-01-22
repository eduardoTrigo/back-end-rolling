const express = require('express')
const { default: mongoose } = require('mongoose')
const morgan = require('morgan')
const situationRouter = require('./routes/situation.routes')

const app = express()

app.use(express.json())


// app.use('/',)
app.use(morgan('dev'))

app.use('/situation', situationRouter)


mongoose.connect('mongodb+srv://clase_7:clase_7@cluster0.nrsbtqm.mongodb.net/clase_7?retryWrites=true&w=majority')
        .then(() => console.log('conectado'))
        .catch(() => console.log('No conectado'))

app.listen(3000, () => console.log("app listening to port", 3000))