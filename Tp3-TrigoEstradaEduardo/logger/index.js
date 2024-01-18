const winston = require('winston')
const IncidentTransport = require('./transport/IncidentTransport')

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service'},
    transports:[
        new winston.transports.File({filename: 'traza.log', level: 'info'}),
        new winston.transports.File({filename: 'error.log', level: 'error'}),
        new winston.transports.File({filename: 'warns.log', level: 'warn'}),
        new IncidentTransport({ level: 'error' }),
        // new winston.transports.Console()
    ]
})

const removelogger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports:[
        new winston.transports.File({filename: 'entidades-eliminadas.log', level: 'info'})
    ]
})

module.exports = {
    logger,
    removelogger
}