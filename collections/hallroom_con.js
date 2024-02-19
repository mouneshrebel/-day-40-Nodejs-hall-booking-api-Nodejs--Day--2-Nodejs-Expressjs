const hallroomData = require("../models/hallroom_data");

const hallrooms = async (req, res) => {
  const newHallroom = new hallroomData({
    number_of_seats: req.body.number_of_seats,
    amenities: req.body.amenities,
    price_per_hour: req.body.price_per_hour,
  });

  try {
    await newHallroom.save();
    res.status(200).json(newHallroom);
  } catch (err) {
    res.status(400).json({ message: "Error", err });
  }
};

const gettingroominfo = async (req, res) => {
  try {
    const hallroom = await hallroomData.find();
    res.status(200).json(hallroom);
  } catch (err) {
    res.status(400).json({ message: "Error", err });
  }
};

module.exports.hallrooms = hallrooms;
module.exports.gettingroominfo = gettingroominfo;
