const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('../models/user');
const loginmember = require('../models/loginmember');
const homeRouter = express.Router();

homeRouter.use(bodyParser.json());

homeRouter.route('/')
.get((req,res,next) => {
    loginmember.find({})
    .then((user) => {
        User.findOne({empid: user[0].username})
        .then((User) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(User);
        }, (err) => next(err))
        .catch((err) => next(err));
    }, (err) => next(err))
    .catch((err) => next(err));
});

homeRouter.route('/:username')
.post((req, res, next) => {
    console.log(req.params.username);
    var member = new loginmember({ id: '1', username: req.params.username});
    member.save(function (err, book) {
        if (err) return console.error(err);
        console.log(" saved to bookstore collection.");
      });
    
})
.put((req, res, next) => {
    console.log("received");
    var myquery = { id: "1" };
    var newvalues = { $set: {id: "1", username: req.params.username } };
    loginmember.updateOne(myquery, newvalues, function(err, res) {
        if (err) throw err;
        console.log("1 document updated");
      });
});
module.exports = homeRouter;