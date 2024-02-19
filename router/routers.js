const express = require("express");
const router = express.Router();

//Total hallroom details
const hallroom_con = require("../collections/hallroom_con");
const bookroom_con = require("../collections/bookroom_con");
const cusbooked_con = require("../collections/cusbooked_data_con");
const roomsbookelist_con = require("../collections/rooms_bookedCon");
const listroomBooked_con = require("../collections/timeroomsbok_con");

router.post("/", hallroom_con.hallrooms);
router.get("/", hallroom_con.gettingroominfo);

//booked rooms
router.post("/bookroom", bookroom_con.BookedRooms);
router.get("/bookroom", bookroom_con.getroombooked);

//customer booked Data

router.post("/customer_booked", cusbooked_con.customerData);
router.get("/customer_booked", cusbooked_con.getcustomer_bookedData);

//rooms bookes list
router.post("/roomsbooked", roomsbookelist_con.RoomsBooked);
router.get("/roomsbooked", roomsbookelist_con.getroomsBooked);

//list rooms booked
router.post("/listrooms", listroomBooked_con.totallistrooms_booked);
router.get("/listrooms", listroomBooked_con.getlistrooms);
module.exports = router;
