const express = require("express");
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const cors = require("cors");
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const app = express();

mongoose.connect(process.env.MONGO_DB_URI)

var corsOptions = {
  origin: process.env.CORS_ORIGIN
};

// Middleware - Has to be placed infront of the routes
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json({limit: "10mb", extended: true}))

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({limit: "10mb", extended: true, parameterLimit: 50000}))

const game = require('./API/gameAPI');

app.use('/api/game', game);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});