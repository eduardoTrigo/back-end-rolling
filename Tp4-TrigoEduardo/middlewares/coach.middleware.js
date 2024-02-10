const { body , query} = require('express-validator')
const { requestValidation } = require('./commonMiddleware')

const validationCoachData = [
    body('nombre').notEmpty().withMessage('el nombre es requerido'),
    body('nombre').isString().withMessage('el nombre debe ser alfabetico'),
    requestValidation,
]

const validationCoachMongoId = [
    query('coachId').optional().isMongoId().withMessage('deberia ser un id formato mongo'),
    requestValidation,
]

module.exports = {
    validationCoachData,
    validationCoachMongoId
}