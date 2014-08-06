var app = require('../app');
var mongoose = require('mongoose');
var request = require('supertest');
var should = require('should');
var User = mongoose.model('User');

describe('POST /user', function() {
  var user = new User({ email: "eric@gmail.com", access_token: "andre"});


describe('valid parameters', function() {
  it("Creates Users", function(done) {
    request(app)
      .post('/user')
      .send({user: user.email, user: user.access_token})
      .expect(200)
      .end(done);
  });
});

describe('invalid parameters', function() {
  it("Does not create Users", function(done) {
    request(app)
      .post('/user')
      .send({user: user.email, user: user.access_token})
      .expect(400)
      .end(done);
    });
  });


});