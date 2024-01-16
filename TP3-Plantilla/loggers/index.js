const winston = require('winston')

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service'},
    transports:[
        new winston.transports.File({filename: 'error.log', level: 'error'}),
        new winston.transports.File({filename: 'combined.log'}),
        new winston.transports.Console()
    ]
    
})

const removeEntitis = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports:[
        new winston.transports.File({filename: 'entidades-removidas.log'})
    ]
})

module.exports = {
    logger
}
