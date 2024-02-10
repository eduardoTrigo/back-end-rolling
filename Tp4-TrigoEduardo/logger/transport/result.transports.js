const { Transport } = require('winston')
const Incident = require('../../models/Incident')

class ResultTransport extends Transport{
    constructor(opts){
        super(opts)
    }
    log(info, callback){
        if (info.level === 'info') {
            setImmediate(async () => {
    
                const result = new Incident({
                    message: {
                        date: new Date().toLocaleString(),
                        info: info.message
                    }
                })
                await result.save()
                
                callback()
            })
        }
    }
}

module.exports = ResultTransport