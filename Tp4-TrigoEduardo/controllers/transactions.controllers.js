const Jugador = require("../models/Jugador")
const OrdenCompra = require("../models/ordenCompra")
const Tecnico = require("../models/Tecnico")

const buyPlayer = async(req, res)=>{
    const {coachId, playerId} = req.body
    const coach = await Tecnico.findById(coachId)
            .populate('jugadores.jugador')
    const player = await Jugador.findById(playerId)

    if(player.status === "NO DISPONIBLE" ){
        throw new Error('el jugador no se encuentra disponible')
    }

    coach.jugadores.push({jugador: playerId})
    coach.presupuesto -= (player.valor * player.estrellas)
    player.status = "NO DISPONIBLE"

    await player.save()            
|   await coach.save()

    res.status(201).json({ message: "compra exitosa ", data: [player, coach]})
}




module.exports = buyPlayer
