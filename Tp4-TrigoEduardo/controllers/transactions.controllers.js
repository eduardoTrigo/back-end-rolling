const { logger, loggerMatch } = require("../logger")
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
        const valorEntrada = 16

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

        const resultado = Math.floor(Math.random() * 5);
        const expectadores = Math.floor(Math.random() * 300) + 1
        const recaudacion = expectadores * valorEntrada

        switch (resultado) {
            case 0:
                team1.presupuesto += (recaudacion * 0.50)
                team2.presupuesto += (recaudacion * 0.50)
                loggerMatch.info({ message: 'empate , recaudacion repartida en partes iguales',data: [expectadores, recaudacion] })
                break;
            case 1:
                team1.presupuesto += (recaudacion * 0.60)
                team2.presupuesto += (recaudacion * 0.40)
                loggerMatch.info({ message: `gana el equipo de ${team1.nombre}`, data: [expectadores, recaudacion] })
                break;
            case 2:
                team1.presupuesto += (recaudacion * 0.40)
                team2.presupuesto += (recaudacion * 0.60)
                loggerMatch.info({ message: `gana el equipo de ${team2.nombre}`, data: [expectadores, recaudacion] })
                break;
            case 3:
                team1.presupuesto += (recaudacion * 0.70)
                team2.presupuesto += (recaudacion * 0.30)
                loggerMatch.info({ message: `gana el equipo de ${team1.nombre} por haTrick`, data: [expectadores, recaudacion] })
                break;
            case 4:
                team1.presupuesto += (recaudacion * 0.30)
                team2.presupuesto += (recaudacion * 0.70)
                loggerMatch.info({ message: `gana el equipo de ${team2.nombre} por haTrick`, data: [expectadores, recaudacion] })
                break;
            default:
                break;
        }

        await team1.save()
        await team2.save()

        res.json(makeSuccessResponse([team1,team2]))

        console.log(team1.jugadores.length)
        console.log(team2.jugadores.length)
        console.log(expectadores)
        console.log(recaudacion)
        console.log(resultado)

    } catch (err) {
        next(err)
    }
}

module.exports = {
    buyPlayer,
    matchCoach
}
