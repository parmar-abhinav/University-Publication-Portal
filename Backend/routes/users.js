var express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const User = require('../models/user');

var router = express.Router();
router.use(bodyParser.json());

router.get('/', (req, res) => {
  if (req.session) {
    console.log(req.session);
    req.session.destroy();
    res.clearCookie('session-id');
    res.redirect('/');
  }
  else {
    var err = new Error('You are not logged in!');
    err.status = 403;
    next(err);
  }
});
router.post('/', (req, res, next) => {

  if(!req.session.user) {
    var username = req.body.username;
    var password = req.body.password;
    var post = req.body.post;
    User.findOne({empid: username})
    .then((user) => {
      if (user === null) {
        var err = new Error('User ' + username + ' does not exist!');
        err.status = 403;
        return next(err);
      }
      else if (user.password !== password) {
        var err = new Error('Your password is incorrect!');
        err.status = 403;
        return next(err);
      }
      else if (user.post !== post)
      {
        var err = new Error('Enter valid post');
        err.status = 403;
        return next(err);
      }
      else if (user.empid === username && user.password === password && user.post === post) {
        req.session.user = 'authenticated';
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('You are authenticated!')
      }
    })
    .catch((err) => next(err));
  }
  else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('You are already authenticated!');
  }
});

module.exports = router;
