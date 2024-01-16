const productRouter = require('express').Router()
const { body, param } = require('express-validator')
const { getAllProducts, createProduct, getProductById, deleteProducto, updateProduct } = require('../controllers/product.controllers')
const { errorMiddleware, requestValidation } = require('../middlewares/common.middleware')


productRouter.get('/',
    getAllProducts,
    errorMiddleware
)

productRouter.get('/:id',
    param('id').isMongoId().withMessage('el id debe ser un formato mongo'),
    requestValidation,
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
    param('id').isMongoId().withMessage('el id debe ser un formato mongo'),
    requestValidation,
    updateProduct,
    errorMiddleware,
)

productRouter.delete('/:id',
    param('id').isMongoId().withMessage('el id debe ser un formato mongo'),
    requestValidation,
    deleteProducto,
    errorMiddleware,
)

module.exports = productRouter