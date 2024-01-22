const { createAuthor, createBook } = require('../controllers/situations.controllers')

const situationRouter = require('express').Router()

situationRouter.post('/populate/create-author', createAuthor)
situationRouter.post('/populate/create-book', createBook)

situationRouter.post('/transactions/create-product', (req, res) => {})

module.exports = situationRouter