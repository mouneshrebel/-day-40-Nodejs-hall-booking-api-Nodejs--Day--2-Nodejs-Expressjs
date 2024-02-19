const listroomBooked = require("../models/timeroomsbok_data");

const totallistrooms_booked = async (req, res) => {
  const newlistrooms = new listroomBooked({
    room_id: req.body.room_id,
    customer_name: req.body.customer_name,
    booking_id: req.body.booking_id,
    booking_date: req.body.booking_date,
    booking_status: req.body.booking_status,
  });
  try {
    await newlistrooms.save();
    res.status(200).json(newlistrooms);
  } catch (err) {
    res.status(400).json({ message: "Error", err });
  }
};

const getlistrooms = async (req, res) => {
  try {
    const listrooms = await listroomBooked.find();
    res.status(200).json(listrooms);
  } catch (err) {
    res.status(400).json({ message: "Error", err });
  }
};

module.exports.totallistrooms_booked = totallistrooms_booked;
module.exports.getlistrooms = getlistrooms;
