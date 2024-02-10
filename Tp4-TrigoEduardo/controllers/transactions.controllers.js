const { logger } = require("../logger")
const Jugador = require("../models/Jugador")
const OrdenCompra = require("../models/ordenCompra")
const Tecnico = require("../models/Tecnico")
const { makeSuccessResponse, makeErrorResponse } = require("../utils.js/response.utils")

const buyPlayer = async (req, res, next) => {
    try {

        const { coachId, playerId } = req.body
        const coach = await Tecnico.findById(coachId)
            .populate('jugadores.jugador')
        const player = await Jugador.findById(playerId)

        if (!player) {
            res.status(404);
            logger.warn({ message: "Jugador inexistente" });
            return res.json(makeErrorResponse("Jugador no encontrado"));
        }

        if (player.status === "NO DISPONIBLE") {
            res.status(404)
            logger.warn(makeErrorResponse("jugador no disponible"))
            return res.json(makeErrorResponse("jugador no disponible"))
        }

        if (player.valor > coach.presupuesto) {
            res.status(404)
            logger.warn(makeErrorResponse("no tiene suficiente presupuesto"))
            return res.json(makeErrorResponse("no tiene suficiente presupuesto"))
        }

        coach.jugadores.push({ jugador: playerId })
        coach.presupuesto -= (player.valor * player.estrellas)
        player.status = "NO DISPONIBLE"

        await player.save()
        await coach.save()

        res.status(201).json(makeSuccessResponse([player, coach]))
    } catch (err) {
        next(err)
    }
}

const matchCoach = async (req, res, next) => {
    try {
        const { coachId_1, coachId_2 } = req.body
    
        if (coachId_1 === coachId_2) {
            res.status(404)
            logger.warn(makeErrorResponse("debe ingresar tecnicos diferentes"))
            return res.json(makeErrorResponse("debe ingresar tecnicos diferentes"))
        }
        const team1 = await Tecnico.findById(coachId_1)
        const team2 = await Tecnico.findById(coachId_2)

        if (team1.jugadores.length < 5) {
            res.status(404)
            logger.warn(makeErrorResponse("deben tener 5 jugadores en sus equipos"))
            return res.json(makeErrorResponse("deben tener 5 jugadores en sus equipos"))
        }

        if (team2.jugadores.length < 5) {
            res.status(404)
            logger.warn(makeErrorResponse("deben tener 5 jugadores en sus equipos"))
            return res.json(makeErrorResponse("deben tener 5 jugadores en sus equipos"))
        }

        const resultado = Math.floor(Math.random() * 5) + 1;
        
        switch (resultado) {
            case 1:
                
                break;
        
            default:
                break;
        }
    
        console.log(team1.jugadores.length)
        console.log(team2.jugadores.length)
        console.log(resultado)
        
    } catch (err) {
        
    }
}

module.exports = {
    buyPlayer,
    matchCoach
}
