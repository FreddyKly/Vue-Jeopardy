const express = require('express');
const mongoose = require("mongoose")

const gameModel = require("../Schemas/Game")
const userModel = require("../Schemas/User")
const categoryModel = require("../Schemas/Category")

const router = express.Router();

// Create a new Game
router.post('/newGame', async (req, res) => {
    console.log('Post-Request for a Game', req.body)
    const NUMBER_OF_TOPICS = 5
    const NUMBER_OF_QUESTIONS = 5
    const EXAMPLE_TOPICS = ["Anime", "Best Songs", "Landmarks", "LoL", "Films"]
    
    const user = await createUserIfNotExists(req)
    var categorysIDs = []

    for (let topicIndex = 0; topicIndex < NUMBER_OF_TOPICS; topicIndex++) {
        var category = new categoryModel ({
            topic: EXAMPLE_TOPICS[topicIndex]
        })
        for (let questionIndex = 0; questionIndex < NUMBER_OF_QUESTIONS; questionIndex++) {
            category.questions.push({
                question: "", 
                gridID: topicIndex * 5 + questionIndex})
        }

        await category.save()
            .then(savedCategory => {
                categorysIDs.push(savedCategory._id)
            })
            .catch(err => handleError(err))
    }
    console.log(categorysIDs)
    const game = await gameModel.create({
        creator: user,
        categories: categorysIDs
    })
    res.status(201).json({gameID: game._id})
})

// Get Game data
router.post('/', async (req, res) => {
    console.log('Get-Request for Game')
    // Game-ID not valid
    if (!mongoose.Types.ObjectId.isValid(req.body.gameID)){
        res.status(404).send('The game-ID you entered was not valid')
        return
    }
    console.log(req.body.gameID)
    const game = await gameModel.findById(req.body.gameID)
    // Game-ID not found
    if (game === null) {
        res.status(404).send('The game-ID you wanted to access did not correspond to a game in the database')
        return
    }
    var categories = [];
    for (let i = 0; i < game.categories.length; i++) {
        topicObject = await categoryModel.findById(game.categories[i])
        categories.push(topicObject)
    }
    res.status(200).json({
        gameID: game._id,
        categories: categories
    })
})

// Change topic
router.post('/topic', async (req, res) => {
    console.log('Get-Request for Topic change', req.body)
    if (!mongoose.Types.ObjectId.isValid(req.body.gameID)){
        res.status(404).send('The game-ID you entered was not valid')
        return
    }
    console.log(req.body.gameID)
    const game = await gameModel.findById(req.body.gameID).populate('categories')
    // Game-ID not found
    if (game === null) {
        res.status(404).send('The game-ID you wanted to access did not correspond to a game in the database')
        return
    }
    for(let i = 0; i < game.categories.length; i++) {
        game.categories[i].topic = req.body.categories[i]
        game.categories[i].save()
    }
    res.status(201).send()
})

async function createUserIfNotExists(req) {
    let foundUser = await userModel.findOne({ name: req.body.user })
    if (foundUser) {
        return foundUser
    } else {
        return await userModel.create({name: req.body.user})
    }
    
}

module.exports = router;