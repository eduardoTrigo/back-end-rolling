const mongoose = require('mongoose')

const booksSchema = new mongoose.Schema({
    nombre: { type: String, required: true},
    precio: { type: Number, required: true},
    paginas: { type: Number, required: false},
    descripcion: { type: String, required: false}
})

const Books = mongoose.model('Books', booksSchema)

module.exports = Books