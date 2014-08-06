
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Gong = mongoose.model('Gong')

// Create Gong
// gongs#createrouter.route('/gongs')

router.route('/gongs')

  .post(function(req, res){
    var gong = new Gong();
    gong.name = req.body.name;

  gong.save(function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'gong created!' });
    });  
  });

module.exports.create = create;

