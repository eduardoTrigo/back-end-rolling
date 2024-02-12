const { Transport } = require('winston')
const Result = require('../../models/Resultados')

class ResultTransport extends Transport{
    constructor(opts){
        super(opts)
    }
    log(info, callback){
        if (info.level === 'info') {
            setImmediate(async () => {
    
                const result = new Result({
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