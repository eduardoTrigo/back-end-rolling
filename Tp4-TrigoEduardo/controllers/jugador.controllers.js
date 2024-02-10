const { logger } = require("../logger")
const Jugador = require("../models/Jugador")
const { makeSuccessResponse, makeErrorResponse } = require("../utils.js/response.utils")

const createPlayer = async (req, res, next) => {
    try {
        const { nombre, valor, estrellas } = req.body
        const player = new Jugador({ nombre, valor, estrellas })
        await player.save()

        res.status(201).json(makeSuccessResponse(player))

    } catch (err) {
        next(err)
    }
}

const getPlayer = async (req, res, next) => {
    try {
        const { playerId } = req.query

        let query = undefined

        if (playerId !== undefined) {
            query = Jugador.findById(playerId)
        } else {
            query = Jugador.find({})
        }

        const response = await query.exec()
        if (!response) {
            res.status(404)
            logger.warn({ message: "jugador inexistente" })
            return res.json(makeErrorResponse("jugador inexistente"))
        }
        res.json(makeSuccessResponse(response))
    } catch (err) {
        next(err)
    }
}

const playerPromotion = async (req, res, next) => {
    try {

        const { playerId, estrellas } = req.body

        const player = await Jugador.findByIdAndUpdate(playerId, { estrellas })

        if (!player) {
            res.status(400)
            logger.warn({ message: " no existe ese jugador" })
            return res.json(makeErrorResponse("no existe el jugador"))
        }

        // player.save()

        res.status(201).json(makeSuccessResponse(player))
    } catch (err) {
        next(err)
    }
}

module.exports = {
    createPlayer,
    getPlayer,
    playerPromotion
}