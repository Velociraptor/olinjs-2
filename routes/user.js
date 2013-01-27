
// routes for users
var User = require('../models/user')

// listing all the users
exports.list = function(req, res){
  // get the list of users
  var users = User.find({}, function (err, docs) {
    if (err)
      return console.log("error", users);
    // send it back
    res.render('users', {users: docs, title: 'My First app'});
  });
};

// creating a new user
exports.create = function(req, res){
  // create the user
  var bob = new User({ name: 'bob', grade: 'A', class: 2013});
  bob.save(function (err) {
    if (err)
      return console.log("error we couldn't save bob");
    // redirect to the list of users
    res.redirect('/users');
  });
};

