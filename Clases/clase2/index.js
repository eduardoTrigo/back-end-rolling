const express = require('express')
const courseRouter = require('./routes/course.routes.js')
const mongoose = require('mongoose')

const app = express()

app.use('/courses', courseRouter)

app.listen(3000 , () => console.log('server listening to port', 3000))

mongoose
    .connect('mongodb+srv://backend_rolling:lemmy271217@cluster0.nrsbtqm.mongodb.net/?retryWrites=true&w=majority')
    .then(()=> console.log('conectado'))
    .catch(()=> console.log('no se conecto'))

// mongodb+srv://backend_rolling:lemmy271217@cluster0.nrsbtqm.mongodb.net/?retryWrites=true&w=majority