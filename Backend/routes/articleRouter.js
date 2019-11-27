const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Book = require('../models/book');
const Journal = require('../models/Journal');
const Chapter = require('../models/bookchapter');
const Conference = require('../models/Conference');


const articleRouter = express.Router();

articleRouter.use(bodyParser.json());


articleRouter.route('/Journals')
.get((req,res,next) => {
    console.log(req.params.username);
    Journal.find({})
    .then((User) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(User);
    }, (err) => next(err))
    .catch((err) => next(err));
})

articleRouter.route('/Journals/:username')
.get((req,res,next) => {
    console.log(req.params.username);
    Journal.find({empid: req.params.username})
    .then((User) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(User);
    }, (err) => next(err))
    .catch((err) => next(err));
})

articleRouter.route('/Conference')
.get((req,res,next) => {
    Conference.find({})
    .then((User) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(User);
    }, (err) => next(err))
    .catch((err) => next(err));
})

articleRouter.route('/Conference/:username')
.get((req,res,next) => {
    Conference.find({empid: req.params.username})
    .then((User) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(User);
    }, (err) => next(err))
    .catch((err) => next(err));
})


articleRouter.route('/Bookchapter')
.get((req,res,next) => {
    Chapter.find({})
    .then((User) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(User);
    }, (err) => next(err))
    .catch((err) => next(err));
})

articleRouter.route('/Bookchapter/:username')
.get((req,res,next) => {
    Chapter.find({empid: req.params.username})
    .then((User) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(User);
    }, (err) => next(err))
    .catch((err) => next(err));
})

articleRouter.route('/Book')
.get((req,res,next) => {
    Book.find({})
    .then((User) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(User);
    }, (err) => next(err))
    .catch((err) => next(err));
})

articleRouter.route('/Book/:username')
.get((req,res,next) => {
    Book.find({empid: req.params.username})
    .then((User) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(User);
    }, (err) => next(err))
    .catch((err) => next(err));
})

articleRouter.route('/')
.post((req, res, next) => {
    if(req.body.type === 'Journal')
    {
        console.log(req.body);
            var myobj = {
                empid: req.body.empid,
                articleid: req.body.articleid,
                articletype: req.body.type,
                title: req.body.title,
                link: req.body.link,
                indexing: req.body.indexing,
                journalname: req.body.journalname,
                volumeno: req.body.volumeno,
                issueno: req.body.issueno,
                pagefrom: req.body.pagefrom,
                pageto: req.body.pageto
            };
            if(req.body.articleid === '' || req.body.title === '' || req.body.Journalname === '' || req.body.volumeno === '' || req.body.issueno === '' || req.body.pagefrom === '' || req.body.pageto === '' || req.body.link === '' || req.body.indexing === '')
            {
                console.log("abhinav singh");
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Complete all the fields before submitting');
            }
            else if(parseInt(req.body.pagefrom, 10) < 0 || parseInt(req.body.pageto, 10) < 0 || parseInt(req.body.volumeno, 10) < 0 || parseInt(req.body.issueno, 10) < 0)
            {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Number fields must be greater tha zero');
            }
            else if(parseInt(req.body.pagefrom, 10)> parseInt(req.body.pageto))
            {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Page from Must be less than Page to field');
            }
            else
            {
                Journal.create(myobj)
                .then((user) => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(user);
                    console.log("success");
                }, (err) => next(err))
                .catch((err) => next(err));
            }
    }
    else if(req.body.type === 'Conference')
    {
            console.log('conference');
            if(req.body.articleid === '' || req.body.title === '' || req.body.conferencename === '' || req.body.location === '' || req.body.date === '' || req.body.pagefrom === '' || req.body.pageto === '' || req.body.link === '' || req.body.indexing === '')
            {
                console.log("abhinav singh");
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Complete all the fields before submitting');
            }
            else if(parseInt(req.body.pagefrom, 10)> parseInt(req.body.pageto))
            {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Page from Must be less than Page to field');
            }
        else
        {
            Conference.create({
                empid: req.body.empid,
                articleid: req.body.articleid,
                articletype: req.body.type,
                title: req.body.title,
                link: req.body.link,
                indexing: req.body.indexing,
                conferencename: req.body.conferencename,
                location: req.body.location,
                date: req.body.date,
                pagefrom: req.body.pagefrom,
                pageto: req.body.pageto
            })
            .then((user) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(user);
                console.log("success");
            }, (err) => next(err))
            .catch((err) => next(err));
        }
    }
    else if(req.body.type === 'Book Chapter')
    {
        console.log('book chapter');
        if(req.body.articleid === '' || req.body.title === '' || req.body.publicationhouse === '' || req.body.location === '' || req.body.date === '' || req.body.link === '' || req.body.indexing === '')
            {
                console.log("abhinav singh");
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Complete all the fields before submitting');
            }
        else
        {
            Chapter.create({
                empid: req.body.empid,
                articleid: req.body.articleid,
                articletype: req.body.type,
                title: req.body.title,
                link: req.body.link,
                indexing: req.body.indexing,
                publicationhouse: req.body.publicationhouse,
                location: req.body.location,
                date: req.body.date
            })
            .then((user) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(user);
                console.log("success");
            }, (err) => next(err))
            .catch((err) => next(err));
        }
    }
    else if(req.body.type === 'Book')
    {
        console.log('book');
        if(req.body.articleid === '' || req.body.title === '' || req.body.publicationhouse === '' || req.body.date === '' || req.body.link === '' || req.body.indexing === '' || req.body.isbnno === '' || req.body.accessionno === '')
            {
                console.log("abhinav singh");
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Complete all the fields before submitting');
            }
            else if(parseInt(req.body.isbnno, 10) < 0 || parseInt(req.body.accessionno, 10) < 0)
            {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Number fields must be greater tha zero');
            }
        else
        {
            Book.create({
                empid: req.body.empid,
                articleid: req.body.articleid,
                articletype: req.body.type,
                title: req.body.title,
                link: req.body.link,
                indexing: req.body.indexing,
                publicationhouse: req.body.publicationhouse,
                date: req.body.date,
                isbnno: req.body.isbnno,
                accessionno: req.body.accessionno
            })
            .then((user) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(user);
                console.log("success");
            }, (err) => next(err))
            .catch((err) => next(err));
        }
    }
});
   
module.exports = articleRouter;