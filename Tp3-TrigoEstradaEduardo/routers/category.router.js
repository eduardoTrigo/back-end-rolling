const categoryRouter = require('express').Router()
const { getAllCategory, getCategoryById, createCategory, updateCategory, deleteCategory } = require('../controllers/category.controllers')
const { errorMiddleware, validateMongoId } = require('../middleware/common.middleware')

categoryRouter.get('/', getAllCategory, errorMiddleware)

categoryRouter.get('/:id', validateMongoId, getCategoryById, errorMiddleware)

categoryRouter.post('/', createCategory, errorMiddleware)

categoryRouter.patch('/:id', validateMongoId, updateCategory, errorMiddleware)

categoryRouter.delete('/:id', validateMongoId, deleteCategory, errorMiddleware)

module.exports = categoryRouter