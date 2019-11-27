const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const conferenceSchema = new Schema({
    empid:{
        type: String
    },
    articleid: {
        type: String,
        unique: true
    },
    articletype: {
        type: String,
        default: 'Conference'
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
    conferencename: {
        type: String
    },
    location: {
        type: String
    },
    date: {
        type: Date
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

var Conference = mongoose.model('Conference', conferenceSchema);

module.exports = Conference;