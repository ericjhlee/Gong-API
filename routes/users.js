// TODO: Implement User routes here

var http = require('http');
var user_controller = require('../app/controllers/user_controller');

// Goes to user_controller * Refer to routes.js
router.post('/', user_controller.create);



