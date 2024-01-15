const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    nombre : {type: String, required: true},
    precio : {type: Number, required: true},
    stock : { type: Number, required: true},
    categoria : {type: String, required: true}
})

const Productos = mongoose.model('Productos', ProductSchema)

module.exports = Productos