const { logger } = require("../logger")
const Jugador = require("../models/Jugador")
const { makeSuccessResponse, makeErrorResponse } = require("../utils.js/response.utils")


// controlador para alta de jugador
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

// controlador de busqueda de jugador/es
const getPlayer = async (req, res, next) => {
    try {
        const { playerId , disponibilidad} = req.query

        let query = undefined
        
        if (playerId !== undefined) {
            query = Jugador.findById(playerId)
        } else {
            query = Jugador.find({})
        }

        //filtro para jugadores disponibles
        if(disponibilidad === "YES"){
            query = query.find({ status: "DISPONIBLE" })
        }

        const response = await query.exec()

        //jugador inexistente
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

// controlador para actualizar cantidad de estrellas del jugador
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