const {createPlayer, getPlayer, playerPromotion } = require('../controllers/jugador.controllers')

const jugadorRouter = require('express').Router()

jugadorRouter.post('/create-player', createPlayer)
jugadorRouter.get('/get-player', getPlayer)
jugadorRouter.patch('/promotion-player', playerPromotion)

module.exports = jugadorRouter