const Tecnico = require("../models/Tecnico")
const { makeSuccessResponse, makeErrorResponse } = require("../utils.js/response.utils")

const createCoach = async(req, res) => {
    const { nombre } = req.body

    const coach = new Tecnico({nombre})
    await coach.save()

    res.json(makeSuccessResponse(coach))
}

const getCoach = async(req, res) => {
    const{coachId} = req.query

    let query = undefined
    if (coachId !== undefined) {
        query = Tecnico.findById(coachId)
    }else{
        query = Tecnico.find({})
    }

    const response = await query.exec()
    if (!response) {
        res.status(404)
        logger.warn({ message: "tecnico inexistente" })
        return res.json(makeErrorResponse("tecnico inexistente"))
    }

    res.json(makeSuccessResponse(response))
}



module.exports = {
    createCoach,
    getCoach
}