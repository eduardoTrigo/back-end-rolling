const { createAuthor, createBook, getBooks, createStaff, createCustomer, getStaff, getCustomer, createProduct, getProduct, makeProductAvailable, updateProduct, prepareOrder } = require('../controllers/situations.controllers')

const situationRouter = require('express').Router()

situationRouter.post('/populate/create-author', createAuthor)
situationRouter.post('/populate/create-book', createBook)
situationRouter.get('/populate/find-books', getBooks)

situationRouter.post('/discriminators/create-staff', createStaff)
situationRouter.post('/discriminators/create-customer', createCustomer)
situationRouter.get('/discriminators/find-staff', getStaff)
situationRouter.get('/discriminators/find-customer', getCustomer)

situationRouter.post('/transactions/create-product', createProduct)
situationRouter.get('/transactions/find-product', getProduct)
situationRouter.patch('/transactions/make-product', makeProductAvailable)
situationRouter.patch('/transactions/update-product', updateProduct)
situationRouter.post('/transactions/prepare-order', prepareOrder)
situationRouter.patch('/transactions/update-order', updateProduct)
situationRouter.patch('/transactions/make-order', updateProduct)

module.exports = situationRouter