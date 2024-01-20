const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    nombre: { type:String, required:true },
    descripcion: { type:String, required:false },
    products: {type: mongoose.Schema.Types.ObjectId, ref: 'Productos'}
})

const Categoria = mongoose.model('Categoria', categorySchema)

module.exports = Categoria