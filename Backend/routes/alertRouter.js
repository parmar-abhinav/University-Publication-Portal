const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const User = require('../models/user');
const Alert = require('../models/alert');
const Book = require('../models/book');
const Journal = require('../models/Journal');
const Chapter = require('../models/bookchapter');
const Conference = require('../models/Conference');
const alertRouter = express.Router();

alertRouter.use(bodyParser.json());

alertRouter.route('/')
.post((req, res, next) => {
    console.log(req.body);
    console.log("Journal");
    Journal.findOne({empid: req.body.authorid, articleid: req.body.articleid}, function(err, result) {
        if (err) throw err;
        console.log("Journal");
        if(result === null)
        {
            Chapter.findOne({empid: req.body.authorid, articleid: req.body.articleid}, function(erra, resulta) {
                if (erra) throw erra;
                console.log("chapter");
                if(resulta == null)
                {
                    Conference.findOne({empid: req.body.authorid, articleid: req.body.articleid}, function(errb, resultb) {
                        if (errb) throw errb;
                        console.log("Conference");
                        if(resultb === null)
                        {
                            Book.findOne({empid: req.body.authorid, articleid: req.body.articleid}, function(errc, resultc) {
                                if (errc) throw errc;
                                console.log("Book");
                                if(resultc === null)
                                {
                                    res.statusCode = 200;
                                    res.setHeader('Content-Type', 'text/plain');
                                    res.end('Enter Valid Article ID');
                                }
                                else
                                {
                                    console.log(resultc);
                                    User.findOne({empid: req.body.empid}, function(err, restttttt){
                                        if(restttttt === null)
                                        {
                                            res.statusCode = 200;
                                            res.setHeader('Content-Type', 'text/plain');
                                            res.end('Enter Valid Author ID');
                                        }
                                        else
                                        {
                                            var myobj = {
                                                empid:  req.body.empid,
                                                authorid: req.body.authorid,
                                                articleid: req.body.articleid,
                                                link: resultc.link
                                            }
                                            Alert.create(myobj, function(err, re) {
                                                if (err) throw err;
                                                console.log("1 document inserted");
                                                res.statusCode = 200;
                                                res.setHeader('Content-Type', 'application/json');
                                                res.json(re);
                                            });
                                        }
                                        
                                    });
                                }
                            });
                        }
                        else
                        {
                            console.log(resultb);
                            User.findOne({empid: req.body.empid}, function(err, resttttttt){
                                if(resttttttt === null)
                                {
                                    res.statusCode = 200;
                                    res.setHeader('Content-Type', 'text/plain');
                                    res.end('Enter Valid Author ID');
                                }
                                else
                                {
                                    var myobj = {
                                        empid:  req.body.empid,
                                        authorid: req.body.authorid,
                                        articleid: req.body.articleid,
                                        link: resultb.link
                                    }
                                    Alert.create(myobj, function(err, re) {
                                        if (err) throw err;
                                        console.log("1 document inserted");
                                        res.statusCode = 200;
                                        res.setHeader('Content-Type', 'application/json');
                                        res.json(re);
                                    });
                                }
                            });
                        }
                    });
                }
                else
                {
                    User.findOne({empid: req.body.empid}, function(err, resttttt){
                        if(resttttt === null)
                        {
                            res.statusCode = 200;
                            res.setHeader('Content-Type', 'text/plain');
                            res.end('Enter Valid Author ID');
                        }
                        else
                        {
                            console.log(resulta);
                            var myobj = {
                                empid:  req.body.empid,
                                authorid: req.body.authorid,
                                articleid: req.body.articleid,
                                link: resulta.link
                            }
                            Alert.create(myobj, function(err, re) {
                                if (err) throw err;
                                console.log("1 document inserted");
                                res.statusCode = 200;
                                res.setHeader('Content-Type', 'application/json');
                                res.json(re);
                            });
                        }
                    });
                }
            });
        }
        else
        {
            User.findOne({empid: req.body.empid}, function(err, resultttt){
                if(resultttt === null)
                {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/plain');
                    res.end('Enter Valid Author ID');
                }
                else
                {
                    console.log(result);
                    var myobj = {
                        empid:  req.body.empid,
                        authorid: req.body.authorid,
                        articleid: req.body.articleid,
                        link: result.link
                    }
                    Alert.create(myobj, function(err, re) {
                        if (err) throw err;
                        console.log("1 document inserted");
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        res.json(re);
                    });
                }
            });
        }
      });
});
alertRouter.route('/:empid')
.get((req,res,next) => {
    console.log(req.params.empid);
    Alert.find({empid: req.params.empid})
    .then((alert) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(alert);
    }, (err) => next(err))
    .catch((err) => next(err));
})

module.exports = alertRouter;