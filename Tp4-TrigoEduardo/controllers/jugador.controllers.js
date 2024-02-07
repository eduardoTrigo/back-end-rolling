const { logger } = require("../logger")
const Jugador = require("../models/Jugador")

const createPlayer = async (req, res, next) => {
    try {
        const { nombre, valor, estrellas } = req.body
        const player = new Jugador({ nombre, valor, estrellas })
        await player.save()

        res.status(201).json(player)

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
            return res.json({ message: "jugador inexistente" })
        }
        res.json(response)
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
            logger.error({ message: " no existe ese jugador" })
            return res.json({ message: " no existe ese jugador" })
        }

        // player.save()

        res.status(201).json({ message: "jugador recibio una nueva valoracion", data: player })
    } catch (err) {
        next(err)
    }
}

module.exports = {
    createPlayer,
    getPlayer,
    playerPromotion
}