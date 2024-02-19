const mongoose = require('mongoose');


const roomsBookedSchema =  mongoose.Schema({
    room_id : {
        type :String
    },
    booked_status : {
        type : String,
        default : true
    },
    customer_name : {
        type : String,
        required : true
    },
    date : {
      type : Date
    },
    start_time : {
        type : String
    },
    end_time : {
        type : String
    }
})


module.exports = mongoose.model('roomsBooked_data' , roomsBookedSchema);