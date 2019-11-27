const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const alertSchema = new Schema({
    empid:{
        type: String
    },
    authorid: {
        type: String
    },
    articleid: {
        type: String
    },
    link: {
        type: String
    }
});

var Alert = mongoose.model('Alert', alertSchema);

module.exports = Alert;