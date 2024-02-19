const booked_room = require("../models/book_room");

const BookedRooms = async (req, res) => {
  const newBooked = new booked_room({
    customer_name: req.body.customer_name,
    room_id: req.body.room_id,
  });

  try {
    await newBooked.save();
    res.status(200).json(newBooked);
  } catch (err) {
    res.status(400).json({ message: "Error", err });
  }
};

const getroombooked = async (req, res) => {
  try {
    const bookedRoom = await booked_room.find();
    res.status(200).json(bookedRoom);
  } catch (err) {
    res.status(400).json({ message: "Error", err });
  }
};

module.exports.BookedRooms = BookedRooms;
module.exports.getroombooked = getroombooked;
