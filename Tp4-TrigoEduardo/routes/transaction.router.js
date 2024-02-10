const {buyPlayer, matchCoach} = require('../controllers/transactions.controllers')
const { errorMiddleware } = require('../middlewares/commonMiddleware')
const { validateIdTransaction  } = require('../middlewares/transaction.middleware')

const transactionRouter = require('express').Router()

transactionRouter.post('/buy-player',
    validateIdTransaction,
    buyPlayer,
    errorMiddleware
)

transactionRouter.post('/match-coach', matchCoach)

module.exports = transactionRouter