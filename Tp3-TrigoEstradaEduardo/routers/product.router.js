const { getAllProduct, createProduct, getProductById, updateProduct, deleteProduct } = require('../controllers/product.controllers')
const { errorMiddleware, validateMongoId } = require('../middleware/common.middleware')
// const { validateProductData } = require('../middleware/product.middleware')

const productRouter = require('express').Router()

productRouter.get('/',
    getAllProduct,
    errorMiddleware
)

productRouter.get('/:id',
    validateMongoId,
    getProductById,
    errorMiddleware
)

productRouter.post('/',
    // validateProductData,
    createProduct,
    errorMiddleware
)

productRouter.patch('/:id',
    validateMongoId,
    updateProduct,
    errorMiddleware,
)

productRouter.delete('/:id',
    validateMongoId,
    deleteProduct,
    errorMiddleware,
)

module.exports = productRouter

