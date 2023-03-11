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

router.get('/', async (req, res) => {
    console.log('Get-Request for Game')
    const game = gameModel.where("_id").equals(req.body.gameID)
    const q1 = await questionColumnModel.create({
        topic: req.body.topic,
        questions: req.body.questions
    })
    game.questions.push(q1)
})