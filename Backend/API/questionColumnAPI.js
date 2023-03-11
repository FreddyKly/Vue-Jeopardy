const express = require('express');
const mongoose = require("mongoose")

const gameModel = require("./Schemas/Game")
const userModel = require("./Schemas/User")
const questionColumnModel = require("./Schemas/QuestionColumn")

const router = express.Router();

router.post('/', async (req, res) => {
    console.log('Post-Request for Question')
    const game = gameModel.where("_id").equals(req.body.gameID)
    const q1 = await questionColumnModel.create({
        topic: req.body.topic,
        questions: req.body.questions
    })
    game.questions.push(q1)
})