const { Transport } = require('winston')

class IncidentTransport extends Transport{
    constructor(opts){
        super(opts)
    }
    log(info, callback){
        if (info.level === 'error') {
            setImmediate(()=>{
    
                console.log(level.info)
                console.log(level.message)
    
                callback()
            })
        }
    }
}

module.exports = IncidentTransport
