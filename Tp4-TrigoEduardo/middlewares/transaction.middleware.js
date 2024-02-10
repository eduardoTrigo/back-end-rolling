const { requestValidation } = require("./commonMiddleware")
const { body } = require('express-validator')
const { logger } = require("../logger")

//validacion ids de coach y player para la compra de jugador
const validateIdTransaction = [
    body('coachId').notEmpty().withMessage('debe ingresar un id de tecnico'),
    body('coachId').isMongoId().withMessage('debe ingresar un id valido'),
    body('playerId').notEmpty().withMessage('debe ingresar un id de jugadoer'),
    body('playerId').isMongoId().withMessage('debe ingresar un id valido'),
    requestValidation,
]

const errorDisponibilidad = async(err, req, res, next)=>{
    console.log("error capturado",err)
    logger.error(err)
    res.status(400)
    res.json({messaje: "jugador no disponible"})
} 

module.exports = {
    validateIdTransaction,
    errorDisponibilidad   
}