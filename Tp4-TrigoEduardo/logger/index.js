const winston = require('winston')
const IncidentTransport = require('./transport/incidents.transports')


const logger = winston.createLogger({
    level : 'info',
    format : winston.format.json(),
    defaultMeta : { service: 'user- service'},
    transports : [
        new winston.transports.File({filename: 'error.log', level: 'error'}),
        new winston.transports.File({filename: 'warns.log', level: 'warn'}),
        // new winston.transports.File({filename: 'general.log'}),
        new winston.transports.Console(),
        new IncidentTransport({ level: 'error'})
    ]
})

module.exports = {logger}