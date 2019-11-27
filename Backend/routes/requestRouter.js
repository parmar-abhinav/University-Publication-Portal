const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const User = require('../models/user');

const userRouter = express.Router();

userRouter.use(bodyParser.json());

userRouter.route('/:empid')
.put((req, res, next) => {
    console.log("update");
    var myquery = { empid: req.params.empid };
    var newvalues = { $set: {
        empid: req.body.empid,
        password: req.body.password,
        name: req.body.name,
        dob: req.body.dob,
        gender: req.body.gender,
        Mobile: req.body.Mobile,
        email: req.body.email,
        dept: req.body.dept,
        post: 'HOD',
        message: req.body.message,
        color: req.body.color
    } };
    User.updateOne(myquery, newvalues, function(err, user) {
        if (err) throw err;
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(user);
        console.log("sucess update");
      });
})
.delete((req, res, next) => {
    User.remove({empid: req.params.empid})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
        console.log("success remove");
    }, (err) => next(err))
    .catch((err) => next(err));    
});


userRouter.route('/')
.get((req,res,next) => {
    User.find({post: 'HODrequest'})
    .then((user) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(user);
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = userRouter;