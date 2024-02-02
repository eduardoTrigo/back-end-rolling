const buyPlayer = require('../controllers/transactions.controllers')

const transactionRouter = require('express').Router()

transactionRouter.post('/buy-player', buyPlayer)

module.exports = transactionRouter