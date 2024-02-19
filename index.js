const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const dburl = process.env.DB_URL;

mongoose.connect(dburl, { useNewUrlParser: true });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const connect = mongoose.connection;
try {
  connect.once("open", () => {
    console.log("Mongoose connected!!!");
  });
} catch (err) {
  console.log(err);
}

const Router = require("./router/routers");

app.use("/", Router);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is connected http://localhost:${port}`);
});
