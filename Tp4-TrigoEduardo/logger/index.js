const winston = require('winston')
const IncidentTransport = require('./transport/incidents.transports')
const ResultTransport = require('./transport/result.transports')


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

const loggerMatch = winston.createLogger({
    lever : 'info',
    format : winston.format.json(),
    defaultMeta : {service: 'user-service'},
    transports : [
        new winston.transports.File({filename: 'resultados-disputa.log',level: 'info'}),
        new winston.transports.Console(),
        new ResultTransport({ level: 'info' })
    ]
})

module.exports = {logger, loggerMatch}