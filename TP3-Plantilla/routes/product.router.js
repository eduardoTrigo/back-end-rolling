const productRouter = require('express').Router()
const { body, param } = require('express-validator')
const { getAllProducts, createProduct, getProductById, deleteProducto, updateProduct } = require('../controllers/product.controllers')
const { errorMiddleware, requestValidation, validateMongoId } = require('../middlewares/common.middleware')
const validateProductData = require('../middlewares/product.middleware')


productRouter.get('/',
    getAllProducts,
    errorMiddleware
)

productRouter.get('/:id',
    validateMongoId,
    getProductById,
    errorMiddleware
)

productRouter.post('/',
    validateProductData,
    createProduct,
    errorMiddleware,
)

productRouter.patch('/:id',
    validateMongoId,
    updateProduct,
    errorMiddleware,
)

productRouter.delete('/:id',
    validateMongoId,
    deleteProducto,
    errorMiddleware,
)

module.exports = productRouter