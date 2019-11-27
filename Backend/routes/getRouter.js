const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const User = require('../models/user');

const userRouter = express.Router();

userRouter.use(bodyParser.json());

userRouter.route('/:dept')
.get((req,res,next) => {
    User.find({dept: req.params.dept}, function(err, result) {
        if (err) throw err;
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(result);
        return
      });
});

module.exports = userRouter;