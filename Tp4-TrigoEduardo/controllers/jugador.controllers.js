const Jugador = require("../models/Jugador")

const createPlayer = async(req, res)=>{
    const {nombre, valor, estrellas} = req.body
    const player = new Jugador({nombre, valor, estrellas})
    await player.save()

    res.status(201).json(player)
}

const getPlayer = async(req, res)=>{
    const {playerId} = req.query

    let query = undefined

    if(playerId !== undefined){
        query = Jugador.findById(playerId)
    }else{
        query = Jugador.find({})
    }

    const response = await query.exec() 

    res.json(response)
}

const playerPromotion = async(req, res) => {
    const {playerId, estrellas } = req.body

    const player = await Jugador.findByIdAndUpdate(playerId, { estrellas })

    if(!player) return res.status(404).json({ message: " no existe ese jugador"})

    player.save()

    res.status(201).json({message: "jugador recibio una nueva valoracion", data: player})
}

module.exports = {
    createPlayer,
    getPlayer,
    playerPromotion
}