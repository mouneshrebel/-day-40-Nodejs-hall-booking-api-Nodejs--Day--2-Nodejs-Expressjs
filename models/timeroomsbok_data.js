const mongoose = require("mongoose");

const listroomsBookeSchema = mongoose.Schema({
  room_id: {
    type: String,
    required: true,
  },
  customer_name: {
    type: String,
    required: true,
  },
  start_time: {
    type: String,
    default: new Date(),
  },
  end_time: {
    type: String,
    default: new Date(),
  },
  booking_id: {
    type: String,
    required: true,
  },
  booking_date: {
    type: Date,
  },
  booking_status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("listroomBooked", listroomsBookeSchema);
