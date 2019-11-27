const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const journalSchema = new Schema({
    articleid: {
        type: String,
        unique: true
    },
    empid:{
        type: String
    },
    articletype: {
        type: String,
        default:'Journal'
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
    journalname: {
        type: String
    },
    volumeno: {
        type: String
    },
    issueno: {
        type: String
    },
    pagefrom: {
        type: String
    },
    pageto: {
        type: String
    },
    citation: {
        type: Number,
        default: 0
    }
});

var Journal = mongoose.model('Journal', journalSchema);

module.exports = Journal;