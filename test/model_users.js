var app = require('../app/app');
var should = require('should');
var mongoose = require('mongoose');

// Get User model
var User = mongoose.model('User');

describe('User', function() {
  describe('#save', function() {
    describe('valid paramaters', function() {
      var user;

      before(function(done) {
        user = new User({access_token: 'asdfg'});
        done();
      });

      after(function(done) {
        user.remove();
        done();
      });

      it('should save without an error', function(done) {
        user.save(done);
      });
    });
  });
});