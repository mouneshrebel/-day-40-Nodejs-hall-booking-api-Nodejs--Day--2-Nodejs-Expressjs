const cusbooked_data = require("../models/cusbooked_data");

const customerData = async (req, res) => {
  const newcustomdata = new cusbooked_data({
    room_id: req.body.room_id,
    customer_name: req.body.customer_name,
    date: req.body.date,
    start_time: req.body.start_time,
  });

  try {
    const customerdata = await newcustomdata.save();
    res.status(200).json(cusbooked_data);
  } catch (err) {
    res.status(400).json({ message: "Error", err });
  }
};

const getcustomer_bookedData = async (req, res) => {
  try {
    const totalcustomerData = await cusbooked_data.find();
    res.status(200).json(totalcustomerData);
  } catch (err) {
    res.status(400).json({ message: "Error", err });
  }
};

module.exports.customerData = customerData;
module.exports.getcustomer_bookedData = getcustomer_bookedData;
