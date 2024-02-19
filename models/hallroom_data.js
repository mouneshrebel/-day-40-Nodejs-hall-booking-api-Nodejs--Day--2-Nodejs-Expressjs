const express =  require('express');
const mongoose = require('mongoose');

const hallroomSchema = mongoose.Schema({
    number_of_seats : {
       type : String,
       required : true
    },
    amenities : {
        type : Array,
        required : true
    },
    price_per_hour : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('totalrooms' , hallroomSchema);