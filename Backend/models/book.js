const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    empid:{
        type: String
    },
    articleid: {
        type: String,
        unique: true
    },
    articletype: {
        type: String,
        default: 'Journal'
    },
    title: {
        type: String
    },
    link: {
        type: String
    },
    indexing: {
        type: String
    },
    publicationhouse: {
        type: String
    },
    date: {
        type: Date
    },
    isbnno: {
        type: String
    },
    accessionno: {
        type: String
    },
    citation: {
        type: Number,
        default: 0
    }
});

var Book = mongoose.model('Book', bookSchema);

module.exports = Book;