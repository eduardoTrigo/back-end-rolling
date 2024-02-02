const { default: mongoose, model } = require("mongoose");

const jugadorSchama = new mongoose.Schema({
    nombre:{
        type:String,
        require:true,
        unique:true},
        
    valor:{
        type:Number,
        required:true,
        default:100
    },
    estrellas:{
        type:Number,
        required:true,
        default:1
    },
    status:{
        type:String,
        enum:["DISPONIBLE","NO DISPONIBLE"],
        default:"DISPONIBLE"
    }
})

const Jugador = model('Jugador', jugadorSchama)

module.exports = Jugador