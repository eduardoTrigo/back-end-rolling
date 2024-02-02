const { Schema, model } = require("mongoose");

const orderCompraSchema = new Schema({
    jugador:{
        type: Schema.Types.ObjectId,
        ref:'Jugador',
        required: true
    },
    entrenador:{
        type: Schema.Types.ObjectId,
        ref:'Tecnico',
        required: true
    },

})

const OrdenCompra = model('OrdenCompra', orderCompraSchema)

module.exports = OrdenCompra