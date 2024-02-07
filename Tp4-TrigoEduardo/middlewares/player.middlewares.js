const { requestValidation } = require("./commonMiddleware")
const { body, query } = require('express-validator')

const validationMongoId = [
    query('playerId').optional().isMongoId().withMessage('deberia ser un id formato mongo'),
    requestValidation,
]

const validationPlayerData = [
    body('nombre').notEmpty().withMessage('el nombre es requerido'),
    body('nombre').isString().withMessage('el nombre debe ser alfabetico'),
    body('valor').optional().isNumeric().withMessage('el valor debe ser numerico'),
    body('estrellas').optional().isNumeric().withMessage('el valor debe ser numerico'),
    requestValidation,
]

const validatePatchPlayer = [
    body('playerId').optional().isMongoId().withMessage('el i debe ser formato mongo'),
    body('valor').optional().isNumeric().withMessage('el valor debe ser numerico'),
    body('estrellas').optional().isNumeric().withMessage('el valor debe ser numerico'),
    requestValidation,
]

module.exports = {
    validationPlayerData,
    validationMongoId,
    validatePatchPlayer
}