const taskRouter = require('express').Router()

taskRouter.get('/',(req,res)=>{
    res.json({message: 'Hola Mundo'})
})

module.exports = taskRouter