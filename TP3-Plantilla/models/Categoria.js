const mongoose = require('mongoose')

const CategoriaSchema = new mongoose.Schema({
    nombre : { type: String, required: true},
    descripcion : { type: String, required: false}
})

const Categoria = mongoose.model('Categoria', CategoriaSchema)

module.exports = Categoria