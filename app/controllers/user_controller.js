
var mongoose   = require('mongoose');
var Schema = mongoose.Schema;
var User = mongoose.model('User')

// Create User
// users#create

router.route('/users')

  .post(function(req, res){
    var user = new User();
    user.email = req.body.email;
    user.access_token = req.body.access_token;

  user.save(function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'user created!' });
    });  
  });

module.exports.create = create;

