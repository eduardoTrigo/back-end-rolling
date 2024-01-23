const { createAuthor, createBook, getBooks, createStaff, createCustomer, getStaff, getCustomer } = require('../controllers/situations.controllers')

const situationRouter = require('express').Router()

situationRouter.post('/populate/create-author', createAuthor)
situationRouter.post('/populate/create-book', createBook)
situationRouter.get('/populate/find-books', getBooks)

situationRouter.post('/discriminators/create-staff', createStaff)
situationRouter.post('/discriminators/create-customer', createCustomer)
situationRouter.get('/discriminators/find-staff', getStaff)
situationRouter.get('/discriminators/find-customer', getCustomer)

situationRouter.post('/transactions/create-product', (req, res) => {})

module.exports = situationRouter