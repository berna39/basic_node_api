const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        min: 4,
        max: 255
    },
    username:{
        type: String,
        required: true,
        min: 4,
        max: 255
    },
    password:{
        type: String,
        required: true,
        min: 4,
        max: 255
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userModel);