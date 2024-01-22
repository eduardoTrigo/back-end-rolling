const { Schema, model } = require("mongoose");

const staffSchema = new Schema({

})

const Staff = model('Staff', staffSchema)

module.exports = Staff