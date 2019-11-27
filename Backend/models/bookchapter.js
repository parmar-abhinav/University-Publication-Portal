const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chapterSchema = new Schema({
    empid:{
        type: String
    },
    articleid: {
        type: String,
        unique: true
    },
    articletype: {
        type: String,
        default: 'Book Chapter'
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
    location: {
        type: String
    },
    date: {
        type: Date
    },
    citation: {
        type: Number,
        default: 0
    }
});

var Chapter = mongoose.model('Chapter', chapterSchema);

module.exports = Chapter;