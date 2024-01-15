const productRouter = require('express').Router()
const { body } = require('express-validator')
const { getAllProducts, createProduct, getProductById, deleteProducto, updateProduct } = require('../controllers/product.controllers')
const { validateMongoId, errorMiddleware, requestValidation } = require('../middlewares/common.middleware')


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
    body('nombre').notEmpty().withMessage('el nombre es requerido'),
    body('nombre').isString().withMessage('el nombre debe ser alfabetico'),
    body('precio').notEmpty().withMessage('el precio es requerido'),
    body('precio').isNumeric().withMessage('el precio debe ser numerico'),
    body('stock').notEmpty().withMessage('el stock es requerido'),
    body('stock').isNumeric().withMessage('el stock debe ser numerico'),
    body('categoria').notEmpty().withMessage('la categoria es requerida'),
    requestValidation,
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