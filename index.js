const QueueHandler = require('./lib/queue-handler')
console.log('--->',__dirname + '/config')
module.exports.Config = require(__dirname + '/config')
module.exports = new QueueHandler()
