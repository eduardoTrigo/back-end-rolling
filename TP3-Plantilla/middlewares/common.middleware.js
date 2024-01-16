const { validationResult, param } = require('express-validator')
const { logger } = require('../loggers')

const requestValidation = (req, res, next)=>{
    const result = validationResult(req)

    if(!result.isEmpty()){
        
        res.status(400)
        return res.json({ errors: result.array()})
    }

    next()
}

const errorMiddleware=(err, req, res)=>{
    logger.error(err)
    res.status(500)
    res.json({message: 'error interno'})
    
}

const validateMongoId = [
    param('id').isMongoId().withMessage('Id must be a Mongo ID'),
    requestValidation,
]

module.exports = {
    requestValidation,
    errorMiddleware,
    validateMongoId
}