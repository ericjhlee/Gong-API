var express = require('express');
var router = express.Router();

// Require routes
//
// TODO: Require route files here
// Examples:
// var follow = require('./follow');
// var listen = require('./listen');

// Configure routes
//
// TODO: Setup routes here
router.use('/gongs', gongs);
router.use('/users', users);

module.exports = router;

