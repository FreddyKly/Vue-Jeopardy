const express = require("express");
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

mongoose.connect("mongodb+srv://freddykly:RatDetector@cluster0.4wp40qf.mongodb.net/Jeopardy")

var corsOptions = {
  origin: "http://localhost:9000"
};

// Middleware - Has to be placed infront of the routes
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json({limit: "10mb", extended: true}))

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({limit: "10mb", extended: true, parameterLimit: 50000}))

const user = require('./API/userAPI');
const categories = require('./API/categoryAPI');
const game = require('./API/gameAPI');

app.use('/api/user', user);
app.use('/api/categories', categories);
app.use('/api/game', game);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});