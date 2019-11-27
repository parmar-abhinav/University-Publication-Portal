const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const User = require('../models/user');
const Journal = require('../models/Journal');
const Conference = require('../models/Conference');
const Chapter = require('../models/bookchapter');
const Book = require('../models/book');

const userRouter = express.Router();

userRouter.use(bodyParser.json());

userRouter.route('/')
.post((req, res, next) => {
    console.log(req.body);
    Journal.findOne({empid: req.body.empid, articleid: req.body.emparticleid}, function(err, resulta) {
        if (err) throw err;
        if(resulta === null)
        {
                Conference.findOne({empid: req.body.empid, articleid: req.body.emparticleid}, function(err, resultb) {
                    if (err) throw err;
                    if(resultb === null)
                    {
                            Chapter.findOne({empid: req.body.empid, articleid: req.body.emparticleid}, function(err, resultc) {
                                if (err) throw err;
                                if(resultc === null)
                                {
                                    Book.findOne({empid: req.body.empid, articleid: req.body.emparticleid}, function(err, resultd) {
                                        if (err) throw err;
                                        if(resultd === null)
                                        {
                                            res.statusCode = 200;
                                            res.setHeader('Content-Type', 'text/plain');
                                            res.end('Enter Valid Article ID');
                                        }
                                        else
                                        {
                                            User.findOne({empid: req.body.authorid}, function(err, result) {
                                                if (err) throw err;
                                                if(result === null)
                                                {
                                                    res.statusCode = 200;
                                                    res.setHeader('Content-Type', 'text/plain');
                                                    res.end('Enter Valid Author ID');
                                                }
                                                else
                                                {
                                                    Journal.findOne({empid: req.body.authorid, articleid: req.body.authorarticleid}, function(err, result) {
                                                        if (err) throw err;
                                                        if(result === null)
                                                        {
                                                                Conference.findOne({empid: req.body.authorid, articleid: req.body.authorarticleid}, function(err, result) {
                                                                    if (err) throw err;
                                                                    if(result === null)
                                                                    {
                                                                            Chapter.findOne({empid: req.body.authorid, articleid: req.body.authorarticleid}, function(err, result) {
                                                                                if (err) throw err;
                                                                                if(result === null)
                                                                                {
                                                                                    Book.findOne({empid: req.body.authorid, articleid: req.body.authorarticleid}, function(err, result) {
                                                                                        if (err) throw err;
                                                                                        if(result === null)
                                                                                        {
                                                                                            res.statusCode = 200;
                                                                                            res.setHeader('Content-Type', 'text/plain');
                                                                                            res.end('Invalid Referenced Article ID');
                                                                                        }
                                                                                        else
                                                                                        {
                                                                                            var myquery = { articleid: req.body.authorarticleid };
                                                                                            var newvalues = { $set: {citation: result.citation + 1} };
                                                                                            Book.updateOne(myquery, newvalues, function(err, reslt) {
                                                                                                if (err) throw err;
                                                                                                console.log("1 document updated");
                                                                                                res.statusCode = 200;
                                                                                                res.setHeader('Content-Type', 'application/json');
                                                                                                res.json(reslt);
                                                                                              });
                                                                                        }
                                                                                      }); 
                                                                                }
                                                                                else
                                                                                {
                                                                                    var myquery = { articleid: req.body.authorarticleid };
                                                                                    var newvalues = { $set: {citation: result.citation + 1} };
                                                                                    Chapter.updateOne(myquery, newvalues, function(err, reslt) {
                                                                                        if (err) throw err;
                                                                                        console.log("1 document updated");
                                                                                        res.statusCode = 200;
                                                                                        res.setHeader('Content-Type', 'application/json');
                                                                                        res.json(reslt);
                                                                                      });
                                                                                }
                                                                              });
                                                                    }
                                                                    else
                                                                    {
                                                                        var myquery = { articleid: req.body.authorarticleid };
                                                                        var newvalues = { $set: {citation: result.citation + 1} };
                                                                        Conference.updateOne(myquery, newvalues, function(err, reslt) {
                                                                            if (err) throw err;
                                                                            console.log("1 document updated");
                                                                            res.statusCode = 200;
                                                                            res.setHeader('Content-Type', 'application/json');
                                                                            res.json(reslt);
                                                                          });
                                                                    }
                                                                  });
                                                        }
                                                        else
                                                        {
                                                            var myquery = { articleid: req.body.authorarticleid };
                                                            var newvalues = { $set: {citation: result.citation + 1} };
                                                            Journal.updateOne(myquery, newvalues, function(err, reslt) {
                                                                if (err) throw err;
                                                                console.log("1 document updated");
                                                                res.statusCode = 200;
                                                                res.setHeader('Content-Type', 'application/json');
                                                                res.json(reslt);
                                                              });
                                                        }
                                                      });
                                                }
                                              });
                                        }
                                      });
                                }
                                else
                                {
                                    User.findOne({empid: req.body.authorid}, function(err, result) {
                                        if (err) throw err;
                                        if(result === null)
                                        {
                                            res.statusCode = 200;
                                            res.setHeader('Content-Type', 'text/plain');
                                            res.end('Enter Valid Author ID');
                                        }
                                        else
                                        {
                                            Journal.findOne({empid: req.body.authorid, articleid: req.body.authorarticleid}, function(err, result) {
                                                if (err) throw err;
                                                if(result === null)
                                                {
                                                        Conference.findOne({empid: req.body.authorid, articleid: req.body.authorarticleid}, function(err, result) {
                                                            if (err) throw err;
                                                            if(result === null)
                                                            {
                                                                    Chapter.findOne({empid: req.body.authorid, articleid: req.body.authorarticleid}, function(err, result) {
                                                                        if (err) throw err;
                                                                        if(result === null)
                                                                        {
                                                                            Book.findOne({empid: req.body.authorid, articleid: req.body.authorarticleid}, function(err, result) {
                                                                                if (err) throw err;
                                                                                if(result === null)
                                                                                {
                                                                                    res.statusCode = 200;
                                                                                    res.setHeader('Content-Type', 'text/plain');
                                                                                    res.end('Invalid Referenced Article ID');
                                                                                }
                                                                                else
                                                                                {
                                                                                    var myquery = { articleid: req.body.authorarticleid };
                                                                                    var newvalues = { $set: {citation: result.citation + 1} };
                                                                                    Book.updateOne(myquery, newvalues, function(err, reslt) {
                                                                                        if (err) throw err;
                                                                                        console.log("1 document updated");
                                                                                        res.statusCode = 200;
                                                                                        res.setHeader('Content-Type', 'application/json');
                                                                                        res.json(reslt);
                                                                                      });
                                                                                }
                                                                              }); 
                                                                        }
                                                                        else
                                                                        {
                                                                            var myquery = { articleid: req.body.authorarticleid };
                                                                            var newvalues = { $set: {citation: result.citation + 1} };
                                                                            Chapter.updateOne(myquery, newvalues, function(err, reslt) {
                                                                                if (err) throw err;
                                                                                console.log("1 document updated");
                                                                                res.statusCode = 200;
                                                                                res.setHeader('Content-Type', 'application/json');
                                                                                res.json(reslt);
                                                                              });
                                                                        }
                                                                      });
                                                            }
                                                            else
                                                            {
                                                                var myquery = { articleid: req.body.authorarticleid };
                                                                var newvalues = { $set: {citation: result.citation + 1} };
                                                                Conference.updateOne(myquery, newvalues, function(err, reslt) {
                                                                    if (err) throw err;
                                                                    console.log("1 document updated");
                                                                    res.statusCode = 200;
                                                                    res.setHeader('Content-Type', 'application/json');
                                                                    res.json(reslt);
                                                                  });
                                                            }
                                                          });
                                                }
                                                else
                                                {
                                                    var myquery = { articleid: req.body.authorarticleid };
                                                    var newvalues = { $set: {citation: result.citation + 1} };
                                                    Journal.updateOne(myquery, newvalues, function(err, reslt) {
                                                        if (err) throw err;
                                                        console.log("1 document updated");
                                                        res.statusCode = 200;
                                                        res.setHeader('Content-Type', 'application/json');
                                                        res.json(reslt);
                                                      });
                                                }
                                              });
                                        }
                                      });
                                }
                              });
                    }
                    else
                    {
                        User.findOne({empid: req.body.authorid}, function(err, result) {
                            if (err) throw err;
                            if(result === null)
                            {
                                res.statusCode = 200;
                                res.setHeader('Content-Type', 'text/plain');
                                res.end('Enter Valid Author ID');
                            }
                            else
                            {
                                Journal.findOne({empid: req.body.authorid, articleid: req.body.authorarticleid}, function(err, result) {
                                    if (err) throw err;
                                    if(result === null)
                                    {
                                            Conference.findOne({empid: req.body.authorid, articleid: req.body.authorarticleid}, function(err, result) {
                                                if (err) throw err;
                                                if(result === null)
                                                {
                                                        Chapter.findOne({empid: req.body.authorid, articleid: req.body.authorarticleid}, function(err, result) {
                                                            if (err) throw err;
                                                            if(result === null)
                                                            {
                                                                Book.findOne({empid: req.body.authorid, articleid: req.body.authorarticleid}, function(err, result) {
                                                                    if (err) throw err;
                                                                    if(result === null)
                                                                    {
                                                                        res.statusCode = 200;
                                                                        res.setHeader('Content-Type', 'text/plain');
                                                                        res.end('Invalid Referenced Article ID');
                                                                    }
                                                                    else
                                                                    {
                                                                        var myquery = { articleid: req.body.authorarticleid };
                                                                        var newvalues = { $set: {citation: result.citation + 1} };
                                                                        Book.updateOne(myquery, newvalues, function(err, reslt) {
                                                                            if (err) throw err;
                                                                            console.log("1 document updated");
                                                                            res.statusCode = 200;
                                                                            res.setHeader('Content-Type', 'application/json');
                                                                            res.json(reslt);
                                                                          });
                                                                    }
                                                                  }); 
                                                            }
                                                            else
                                                            {
                                                                var myquery = { articleid: req.body.authorarticleid };
                                                                var newvalues = { $set: {citation: result.citation + 1} };
                                                                Chapter.updateOne(myquery, newvalues, function(err, reslt) {
                                                                    if (err) throw err;
                                                                    console.log("1 document updated");
                                                                    res.statusCode = 200;
                                                                    res.setHeader('Content-Type', 'application/json');
                                                                    res.json(reslt);
                                                                  });
                                                            }
                                                          });
                                                }
                                                else
                                                {
                                                    var myquery = { articleid: req.body.authorarticleid };
                                                    var newvalues = { $set: {citation: result.citation + 1} };
                                                    Conference.updateOne(myquery, newvalues, function(err, reslt) {
                                                        if (err) throw err;
                                                        console.log("1 document updated");
                                                        res.statusCode = 200;
                                                        res.setHeader('Content-Type', 'application/json');
                                                        res.json(reslt);
                                                      });
                                                }
                                              });
                                    }
                                    else
                                    {
                                        var myquery = { articleid: req.body.authorarticleid };
                                        var newvalues = { $set: {citation: result.citation + 1} };
                                        Journal.updateOne(myquery, newvalues, function(err, reslt) {
                                            if (err) throw err;
                                            console.log("1 document updated");
                                            res.statusCode = 200;
                                            res.setHeader('Content-Type', 'application/json');
                                            res.json(reslt);
                                          });
                                    }
                                  });
                            }
                          });
                    }
                  });
        }
        else
        {
            User.findOne({empid: req.body.authorid}, function(err, result) {
                if (err) throw err;
                if(result === null)
                {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/plain');
                    res.end('Enter Valid Author ID');
                }
                else
                {
                    Journal.findOne({empid: req.body.authorid, articleid: req.body.authorarticleid}, function(err, result) {
                        if (err) throw err;
                        if(result === null)
                        {
                                Conference.findOne({empid: req.body.authorid, articleid: req.body.authorarticleid}, function(err, result) {
                                    if (err) throw err;
                                    if(result === null)
                                    {
                                            Chapter.findOne({empid: req.body.authorid, articleid: req.body.authorarticleid}, function(err, result) {
                                                if (err) throw err;
                                                if(result === null)
                                                {
                                                    Book.findOne({empid: req.body.authorid, articleid: req.body.authorarticleid}, function(err, result) {
                                                        if (err) throw err;
                                                        if(result === null)
                                                        {
                                                            res.statusCode = 200;
                                                            res.setHeader('Content-Type', 'text/plain');
                                                            res.end('Invalid Referenced Article ID');
                                                        }
                                                        else
                                                        {
                                                            var myquery = { articleid: req.body.authorarticleid };
                                                            var newvalues = { $set: {citation: result.citation + 1} };
                                                            Book.updateOne(myquery, newvalues, function(err, reslt) {
                                                                if (err) throw err;
                                                                console.log("1 document updated");
                                                                res.statusCode = 200;
                                                                res.setHeader('Content-Type', 'application/json');
                                                                res.json(reslt);
                                                              });
                                                        }
                                                      }); 
                                                }
                                                else
                                                {
                                                    var myquery = { articleid: req.body.authorarticleid };
                                                    var newvalues = { $set: {citation: result.citation + 1} };
                                                    Chapter.updateOne(myquery, newvalues, function(err, reslt) {
                                                        if (err) throw err;
                                                        console.log("1 document updated");
                                                        res.statusCode = 200;
                                                        res.setHeader('Content-Type', 'application/json');
                                                        res.json(reslt);
                                                      });
                                                }
                                              });
                                    }
                                    else
                                    {
                                        var myquery = { articleid: req.body.authorarticleid };
                                        var newvalues = { $set: {citation: result.citation + 1} };
                                        Conference.updateOne(myquery, newvalues, function(err, reslt) {
                                            if (err) throw err;
                                            console.log("1 document updated");
                                            res.statusCode = 200;
                                            res.setHeader('Content-Type', 'application/json');
                                            res.json(reslt);
                                          });
                                    }
                                  });
                        }
                        else
                        {
                            var myquery = { articleid: req.body.authorarticleid };
                            var newvalues = { $set: {citation: result.citation + 1} };
                            Journal.updateOne(myquery, newvalues, function(err, reslt) {
                                if (err) throw err;
                                console.log("1 document updated");
                                res.statusCode = 200;
                                res.setHeader('Content-Type', 'application/json');
                                res.json(reslt);
                              });
                        }
                      });
                }
              });
        }
      });
});

module.exports = userRouter;