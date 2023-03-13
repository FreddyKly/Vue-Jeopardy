const express = require('express');
const mongoose = require("mongoose")

const gameModel = require("../Schemas/Game")
const userModel = require("../Schemas/User")

const router = express.Router();

router.post('/', async (req, res) => {
    console.log('Post-Request for a User')
    const user = await userModel.create({name: req.body.name})
    res.status(201).json({userID: user._id})
})

module.exports = router;