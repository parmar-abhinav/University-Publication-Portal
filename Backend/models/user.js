const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    empid:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    Mobile: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    dept: {
        type: String,
        required: true
    },
    post: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    color:
    {
        type: String,
        required: true
    }
});

var User = mongoose.model('User', userSchema);

module.exports = User;