const { createPlayer, getPlayer, playerPromotion } = require('../controllers/jugador.controllers')
const { errorMiddleware } = require('../middlewares/commonMiddleware')
const { validationPlayerData, validationMongoId, validatePatchPlayer } = require('../middlewares/player.middlewares')
const jugadorRouter = require('express').Router()

jugadorRouter.post('/create-player',
    validationPlayerData,
    createPlayer,
    errorMiddleware
)
jugadorRouter.get('/get-player',
    validationMongoId,
    getPlayer,
    errorMiddleware
)
jugadorRouter.patch('/promotion-player',
    validatePatchPlayer,
    playerPromotion,
    errorMiddleware
)

module.exports = jugadorRouter