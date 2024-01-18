const { body } = require('express-validator')
const { requestValidation } = require('./common.middleware')

const validateProductData = [
    body('nombre').notEmpty().withMessage('Name is required'),
    body('nombre').isString().withMessage('Name must be a string'),
    body('precio').notEmpty().withMessage('Price is required'),
    body('precio').isNumeric().withMessage('Price must be a number'),
    requestValidation,
]

module.exports = {
    validateProductData
}