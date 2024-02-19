const mongoose = require('mongoose');

const cusbookedSchema = mongoose.Schema({
    room_id: {
        type : String,
        required : true,
    },
    booked_status : {
        type : String,
        default : true
    },
    customer_name : {  
        type:String,
    },
    date : {
        type : Date,  
    },
    start_time : {
       type : String,
    },
    end_time : {
       type : Date,
       default : new Date()
    }
})

module.exports = mongoose.model('customerData' , cusbookedSchema);
