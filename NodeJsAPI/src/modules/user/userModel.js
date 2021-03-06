var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  id: String,
  firstName: String,
  lastName: String,
  birthDay: String,
  email: String,
  password: String,
});

mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');
