var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'localhost');

var userSchema = mongoose.Schema({
  name: String,
  grade: String,
  class: Number
});

var User = mongoose.model('User', userSchema);

// why does this use module.exports instead of exports? 
// http://stackoverflow.com/questions/7137397/module-exports-vs-exports-in-nodejs
module.exports = User;