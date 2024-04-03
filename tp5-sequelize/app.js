const express = require('express')
const taskRouter = require('./routes/tasks.routes')

const app = express()

app.use(express.json())

app.use('/api', taskRouter)

module.exports = app