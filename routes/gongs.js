// TODO: Implement User routes here

// CREATE USER 
// LOGIN
// RECEIVING GONG
// EMAIL/Access Token

var http = require('http');
var gong_controller = require('../app/controllers/gong_controller');

// Goes to gong_controller * Refer to routes.js
router.post('/', gong_controller.create);
