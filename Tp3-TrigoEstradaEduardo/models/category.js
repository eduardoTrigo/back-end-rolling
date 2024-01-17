const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    nombre: { type:String, required:true },
    descripcion: { type:String, required:false }
})

const Categoria = mongoose.model('Categoria', categorySchema)

module.exports = Categoria