//importo express
const express = require("express")

//genero mi app
const app = express()

//solicitud http
app.get('/hello', (req , res)=>{
    res.json({message: "hola mundo"})
})

//conecto mi app al puerto 3000
app.listen(3000, ()=> console.log("listen to port", 3000) )