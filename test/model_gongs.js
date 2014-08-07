var app = require('../app/app');
var should = require('should');
var mongoose = require('mongoose');

// Get Gong model
var Gong = mongoose.model('Gong');

describe('Gong', function() {
  describe('#save', function() {
    describe('valid paramaters', function() {
      var ownerId = mongoose.Types.ObjectId();
      var targetId = mongoose.Types.ObjectId();
      var gong;

      before(function(done) {
        gong = new Gong({ownerId: ownerId, targets: [targetId]});
        done();
      });

      after(function(done) {
        gong.remove();
        done();
      });

      it('should save without an error', function(done) {
        gong.save(done);
      });
    });
  });
});