const express = require('express')
const tableRouter = require('./routes/tables.router')

const app = express()

app.use(express.json())

app.use('/tables', tableRouter)

module.exports = app