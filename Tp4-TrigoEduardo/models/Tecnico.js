const { default: mongoose, Schema } = require("mongoose");

const itemsSchema = mongoose.Schema({
    jugador:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'Jugador'
    }
})

const tecnicoSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    presupuesto:{
        type:Number,
        default:1000
    },
    jugadores:{
        type:[itemsSchema],
        // min:6
    }
})

const Tecnico = model('Tecnico', tecnicoSchema)

module.exports = Tecnico