const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    nombre: { type: String , required: true },
    apellido: { type: String , required: true }
})

const Author = mongoose.model('Author', AuthorSchema)

module.exports = Author