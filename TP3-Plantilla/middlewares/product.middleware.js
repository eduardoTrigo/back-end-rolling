const { requestValidation } = require("./common.middleware");

const { body } = require('express-validator')

const validateProductData = [
    body('nombre').notEmpty().withMessage('el nombre es requerido'),
    body('nombre').isString().withMessage('el nombre debe ser alfabetico'),
    body('precio').notEmpty().withMessage('el precio es requerido'),
    body('precio').isNumeric().withMessage('el precio debe ser numerico'),
    body('stock').notEmpty().withMessage('el stock es requerido'),
    body('stock').isNumeric().withMessage('el stock debe ser numerico'),
    body('categoria').notEmpty().withMessage('la categoria es requerida'),
    requestValidation,
]

module.exports = validateProductData