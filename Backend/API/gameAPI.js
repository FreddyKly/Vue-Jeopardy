const express = require('express');
const mongoose = require("mongoose")

const gameModel = require("../Schemas/Game")
const userModel = require("../Schemas/User")
const questionColumnModel = require("../Schemas/QuestionColumn")

const router = express.Router();

router.post('/', async (req, res) => {
    console.log('Post-Request for a Game')
    const NUMBER_OF_TOPICS = 5
    const NUMBER_OF_QUESTIONS = 5
    const EXAMPLE_TOPICS = ["Anime", "Best Songs", "Landmarks", "LoL", "Films"]
    
    const user = await  userModel.create({name: req.body.user})
    var questionColumnsIDs = []

    for (let topicIndex = 0; topicIndex < NUMBER_OF_TOPICS; topicIndex++) {
        var questionColumn = new questionColumnModel ({
            topic: EXAMPLE_TOPICS[topicIndex]
        })
        for (let questionIndex = 0; questionIndex < NUMBER_OF_QUESTIONS; questionIndex++) {
            questionColumn.questions.push({
                question: "", 
                gridID: topicIndex * 5 + questionIndex})
        }

        await questionColumn.save()
            .then(savedQuestionColumn => {
                console.log('Hello', savedQuestionColumn._id)
                questionColumnsIDs.push(savedQuestionColumn._id)
            })
            .catch(err => handleError(err))
    }
    console.log(questionColumnsIDs)
    const game = await gameModel.create({
        creator: user,
        questions: questionColumnsIDs
    })
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

module.exports = router;