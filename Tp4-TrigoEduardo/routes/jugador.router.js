const {createPlayer, getPlayer } = require('../controllers/jugador.controllers')

const jugadorRouter = require('express').Router()

jugadorRouter.post('/create-player', createPlayer)
jugadorRouter.get('/get-player', getPlayer)

module.exports = jugadorRouter