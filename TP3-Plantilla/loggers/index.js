const winston = require('winston')
const IncidentTransport = require('./transport/IncidentTransport')

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service'},
    transports:[
        new winston.transports.File({filename: 'error.log', level: 'error'}),
        // new winston.transports.File({filename: 'combined.log'}),
        new IncidentTransport({ level: 'error'}),
        new winston.transports.Console()
    ]
    
})

const removeLogger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports:[
        new winston.transports.File({filename: 'entidades-removidas.log', level: 'info'})
    ]
})

module.exports = {
    logger,
    removeLogger,
}
