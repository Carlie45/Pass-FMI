const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

let usersSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  firstName: String,
  lastName: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  }
});

usersSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', usersSchema);
