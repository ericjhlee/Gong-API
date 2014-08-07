var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create schema for Gong object
var GongSchema = new Schema({
  ownerId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  targets: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }]
});

mongoose.model('Gong', GongSchema);