const { createAuthor, createBook, getBooks, createStaff, createCustomer, getStaff, getCustomer, createProduct, getProduct, makeProductAvailable, updateProduct, prepareOrder, findNewestOrder, addProductOrder, buyOrder } = require('../controllers/situations.controllers')

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
situationRouter.get('/transactions/newest-order', findNewestOrder)
situationRouter.post('/transactions/add-product', addProductOrder)
situationRouter.post('/transactions/buy-order', buyOrder)

module.exports = situationRouter