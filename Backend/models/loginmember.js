const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loginmembers = new Schema({
    id: {
        type: String,
        default: '1'
    },
    username: {
        type: String,
        required: true
    }
});

var loginmember = mongoose.model('loginmember', loginmembers);
module.exports = loginmember;