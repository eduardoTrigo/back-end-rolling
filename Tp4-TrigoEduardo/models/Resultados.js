const mongoose = require('mongoose')

const resultSchema = new mongoose.Schema({
    message: {
        type:mongoose.Schema.Types.Mixed,
        required:true
    }
})

const Result = mongoose.model('Result', resultSchema)

module.exports = Result