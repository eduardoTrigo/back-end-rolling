const Tecnico = require("../models/Tecnico")
const { makeSuccessResponse, makeErrorResponse } = require("../utils.js/response.utils")

const createCoach = async (req, res, next) => {
    try {
        const { nombre } = req.body

        const coach = new Tecnico({ nombre })
        await coach.save()

        res.status(201)
        res.json(makeSuccessResponse(coach))
    } catch (err) {
        next(err)
    }
}


//controlador para la busqueda de tecnicos
const getCoach = async (req, res, next) => {
    try {
        const { coachId , playerData } = req.query

        let query = undefined
        if (coachId !== undefined) {
            query = Tecnico.findById(coachId)
        } else {
            query = Tecnico.find({})
        }

        if (playerData === "YES") {
            query = query.populate('jugadores.jugador')
        }

        const response = await query.exec()
        if (!response) {
            res.status(404)
            logger.warn({ message: "tecnico inexistente" })
            return res.json(makeErrorResponse("tecnico inexistente"))
        }

        res.json(makeSuccessResponse(response))
    } catch (err) {
        next(err)
    }
}



module.exports = {
    createCoach,
    getCoach
}