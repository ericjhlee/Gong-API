var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create schema for User object
var UserSchema = new Schema({
  email: { type: String, lowercase: true, trim: true },
  access_token: { type: String, trim: true, required: true }
});

mongoose.model('User', UserSchema);