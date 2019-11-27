const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const User = require('../models/user');
const Book = require('../models/book');
const Chapter = require('../models/bookchapter');
const Journal = require('../models/Journal');
const Conference = require('../models/Conference');
const Alert = require('../models/alert');

const userRouter = express.Router();

userRouter.use(bodyParser.json());

userRouter.route('/:empid')
.get((req, res, next) => {
    console.log("request received")
    User.findOne({empid: req.params.empid}, function(err, result) {
        if (err) throw err;
        if(result === null)
        {
            res.statusCode = 200;
            res.setHeader('content-type', 'plain/text');
            res.end("Invalid Employee ID");
            return;
        }   
        console.log(req.params.empid)
        User.remove({empid: req.params.empid})
        .then((resp) => {
            console.log("user2")
            Book.remove({empid: req.params.empid})
            .then((resp) => {
                console.log("user3")
                Chapter.remove({empid: req.params.empid})
                .then((resp) => {
                    console.log("request received")
                    Journal.remove({empid: req.params.empid})
                    .then((resp) => {
                        console.log("request received")
                       Conference.remove({empid: req.params.empid})
                        .then((resp) => {
                            console.log("request received")
                           Alert.remove({empid: req.params.empid})
                            .then((resp) => {
                                    res.statusCode = 200;
                                    res.setHeader('content-type', 'plain/text');
                                    res.end("Deleted the account")
                            }, (err) => next(err))
                            .catch((err) => next(err));

                        }, (err) => next(err))
                        .catch((err) => next(err));

                    }, (err) => next(err))
                    .catch((err) => next(err));

                }, (err) => next(err))
                .catch((err) => next(err));

            }, (err) => next(err))
            .catch((err) => next(err));

        }, (err) => next(err))
        .catch((err) => next(err));

      });    
});

module.exports = userRouter;