const express = require('express')
const { default: mongoose } = require('mongoose')
const authorRouter = require('./routes/author.router')
const booksRouter = require('./routes/books.router')

const app = express()

app.use(express.json())

app.use('/authors', authorRouter)
app.use('/books', booksRouter)

mongoose.connect('mongodb+srv://tp2_books:12345@cluster0.nrsbtqm.mongodb.net/?retryWrites=true&w=majority')
    .then(()=>console.log("conectado"))
    .catch(()=>console.log("no se conecto"))
app.listen(3000, ()=> console.log("server listering in port", 3000))
