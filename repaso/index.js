//importo express
const express = require("express")
const mongoose = require('mongoose')
const courseRouter = require('./routes/course.route')

//genero mi app
const app = express()

app.use(express.json());

//solicitud http
// app.get('/hello', (req , res)=>{
//     res.json({message: "hola mundo"})
// })

app.use('/cursos', courseRouter)

//conecto mi app al puerto 3000
mongoose.connect('mongodb+srv://repaso1:repaso1@cluster0.nrsbtqm.mongodb.net/repaso1?retryWrites=true&w=majority')
    .then(()=> console.log('conectado'))
    .catch(()=> console.log('no conectado'))
app.listen(3000, ()=> console.log("listen to port", 3000) )