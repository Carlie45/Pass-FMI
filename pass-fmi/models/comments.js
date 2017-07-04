var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection('mongodb://localhost/test');

autoIncrement.initialize(connection);

var commentsSchema = new Schema({
  author: {
    type: Schema.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

commentsSchema.plugin(autoIncrement.plugin, 'Comment');
module.exports = mongoose.model('Comment', commentsSchema);
