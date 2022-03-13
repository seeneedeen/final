const mongoose = require('mongoose');

const user = mongoose.Schema({
    name:{
        type: String,
        required: true,
        min: 4
    },
    email:{
        type: String,
        required: true,
        min: 6
    },
    password:{
        type: String,
        default:null,
        min: 8
    },
    picture:{
        type: String,
        required:true
    },
    date:{
        type: String,
        default: Date.now
    }
})

module.exports = mongoose.model('user',user)