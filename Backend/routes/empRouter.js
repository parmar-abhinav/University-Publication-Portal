const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const User = require('../models/user');

const userRouter = express.Router();

userRouter.use(bodyParser.json());

userRouter.route('/')
.post((req, res, next) => {
    User.create(req.body)
    .then((user) => {
        console.log('employee registered ', user);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end("Successfull Registered");
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = userRouter;