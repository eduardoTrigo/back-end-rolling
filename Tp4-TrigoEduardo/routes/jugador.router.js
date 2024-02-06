const { createPlayer, getPlayer, playerPromotion } = require('../controllers/jugador.controllers')
const { errorMiddleware, requestValidation } = require('../middlewares/commonMiddleware')
const { body, query } = require('express-validator')
const jugadorRouter = require('express').Router()

jugadorRouter.post('/create-player',
    body('nombre').notEmpty().withMessage('el nombre es requerido'),
    body('nombre').isString().withMessage('el nombre debe ser alfabetico'),
    body('valor').optional().isNumeric().withMessage('el valor debe ser numerico'),
    body('estrellas').optional().isNumeric().withMessage('el valor debe ser numerico'),
    requestValidation,
    createPlayer,
    errorMiddleware
)
jugadorRouter.get('/get-player',
    query('playerId').optional().isMongoId().withMessage('deberia ser un id formato mongo'),
    requestValidation,
    getPlayer,
    errorMiddleware
)
jugadorRouter.patch('/promotion-player', playerPromotion, errorMiddleware)

module.exports = jugadorRouter