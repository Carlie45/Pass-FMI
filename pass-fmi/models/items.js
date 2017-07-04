const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection('mongodb://localhost/test');

autoIncrement.initialize(connection);

var deepPopulate = require('mongoose-deep-populate')(mongoose);
let itemsSchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: 'User',
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  price: Number,
  department: String,
  comments: [{
    type: Number,
    ref: 'Comment'
  }]
});

itemsSchema.plugin(deepPopulate, { populate: {
    'comments.author': {
      select: 'username',
    }
  }});
itemsSchema.plugin(autoIncrement.plugin, 'Item');
module.exports = mongoose.model('Item', itemsSchema);
