const Tecnico = require("../models/Tecnico")

const createCoach = async(req, res) => {
    const { nombre } = req.body

    const coach = new Tecnico({nombre})
    await coach.save()

    res.json(coach)
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

    res.json(response)
}


module.exports = {
    createCoach,
    getCoach
}