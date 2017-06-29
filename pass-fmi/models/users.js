const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let usersSchema = new Schema({
  name: String,
});

let User = mongoose.model('users', usersSchema);
module.exports = User;
