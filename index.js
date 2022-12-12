const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

const lecturerRouter = require('./routes/lecturer');
const studentRouter = require('./routes/student');
const adminRouter = require('./routes/admin')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:admin@cluster0.ojjgc5y.mongodb.net/production").then(() => {
  console.log("Connected to DB ...");
});

app.use("/lecturer", lecturerRouter);
app.use("/student", studentRouter);
app.use("/admin", adminRouter);

app.listen(3000, function () {
  console.log('SERVER STARTED ON localhost:3000');
});
