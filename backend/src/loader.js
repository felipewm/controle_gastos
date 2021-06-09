const server = require('./config/server')
require('./config/db.js')
require('./config/routes')(server)