const express = require('express');
const mongoose = require("mongoose")

const gameModel = require("./Schemas/Game")
const user = require("./Schemas/User")
const question = require("./Schemas/Questions")

const router = express.Router();

router.post('/', async (req, res) => {
    console.log('Post-Request for a Game')
    const game = await gameModel.create({creator: req.body.user})
    res.status(201).json({gameID: game._id})
})