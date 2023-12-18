const { validationResult} = require('express-validator')

const requestValidation = (req, res, next) => {
        const result = validationResult(req)
  
        if (!result.isEmpty()) return res.json({ errors: result.array() })
  
        next()
     }


const errorMiddleware=(err, req, res, next)=>{
    console.log('error capturado', err)
    res.status(500)
    res.json({message: 'error interno'})
}



module.exports= {
    requestValidation,
    errorMiddleware
}