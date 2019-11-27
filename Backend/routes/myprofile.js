const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const User = require('../models/user');
const loginmember = require('../models/loginmember');

const MyprofileRouter = express.Router();

MyprofileRouter.use(bodyParser.json());

MyprofileRouter.route('/')
.get((req,res,next) => {
    loginmember.findOne({}, function(err, result) {
        if (err) throw err;
        console.log(result.username);
        User.findOne({empid: result.username})
        .then((User) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(User);
        }, (err) => next(err))
        .catch((err) => next(err));
      });
});

module.exports = MyprofileRouter;