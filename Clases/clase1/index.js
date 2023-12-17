//importo express
const express = require("express")

//genero mi aplicacion
const app = express()

app.use(express.json())

let autores = []
let libros = []

//CONTROLADOR
//manejamos las solicitudes http para la url /hello 
app.get('/hello', (req , res)=>{
    //solicitud - consulta - peticion
    //req

    //respuesta
    res.json({message: 'hello world'})
})

// Codigo para crear autores
app.post('/autores', (req, res)=>{
    const {nombre , apellido, id} = req.body
    const nuevoAutor = {nombre , apellido, id}
    autores.push(nuevoAutor)
    req.status(201)
    res.send('autor creado')
})

app.get('/autores', (req , res)=>{
    req.status(200)
    res.json(autores)
})

app.delete('/autores/:id', (req , res)=>{
    const {id} = req.params

    autores = autores.filter(autor => autor.id !== +id)

    res.send('eliminado')
})

//servimos la aplicacion en el puerto 3000
app.listen(3000, () => console.log('server listening to port', 3000))