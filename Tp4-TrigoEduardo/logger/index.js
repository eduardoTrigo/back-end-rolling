const winston = require('winston')
const IncidentTransport = require('./transport/incidents.transports')

const incidentTransport  = new IncidentTransport({ level: 'error'})

const logger = winston.createLogger({
    level : 'info',
    format : winston.format.json(),
    defaultMeta : { service: 'user- service'},
    transports : [
        new winston.transports.File({filename: 'error.log', level: 'error'}),
        new winston.transports.File({filename: 'general.log'}),
        new winston.transports.Console(),
        incidentTransport
    ]
})

module.exports = {logger}