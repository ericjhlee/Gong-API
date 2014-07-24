var app = require('./app/app');
var config = require('./config/config');

// Start listening to port
app.listen(config.port);
console.log('Gong API server started');