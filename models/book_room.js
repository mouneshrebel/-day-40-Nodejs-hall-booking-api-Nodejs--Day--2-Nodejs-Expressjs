const mongoose =  require('mongoose');


const bookroomSchema = mongoose.Schema({
    customer_name : {
        type : String,
        required : true
    },
    date : {
        type : Date,
       default : new Date()
    },
    start_time : {
        type : Date,
        default : new Date()
    },
    room_id : {
        type : String,
        unique : true,
        required : true
    }
})

module.exports = mongoose.model('booked_room',bookroomSchema);

