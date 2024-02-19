const roomsBookedSchema = require("../models/rooms_bookeddata");

const RoomsBooked = async (req, res) => {
  const newroomBooked = new roomsBookedSchema({
    room_id: req.body.room_id,
    booked_status: req.body.booked_status,
    customer_name: req.body.customer_name,
    date: req.body.date,
    start_time: req.body.start_time,
    end_time: req.body.end_time,
  });

  try {
    await newroomBooked.save();
    res.status(200).json(newroomBooked);
  } catch (err) {
    res.status(400).json({ message: "Error", err });
  }
};

const getroomsBooked = async (req, res) => {
  try {
    const bookedrooms = await roomsBookedSchema.find();
    res.status(200).json(bookedrooms);
  } catch (err) {
    res.status(400).json({ message: "Error", err });
  }
};

module.exports.RoomsBooked = RoomsBooked;
module.exports.getroomsBooked = getroomsBooked;
