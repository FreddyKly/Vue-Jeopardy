const express = require('express');
const mongoose = require("mongoose")

const gameModel = require("./Schemas/Game")
const userModel = require("./Schemas/User")
const questionModel = require("./Schemas/Questions")

const router = express.Router();

router.post('/', async (req, res) => {
    console.log('Post-Request for Question')
    const game = mongoose.findById(req.body.gameID)
    game.
})

router.post('/category', async (req, res) => {
    console.log('Post-Request for Category')
    req.body.gameID
})

fetch()
async function test() {
    const q1 = await question.create({
        topic: "Anime",
        questions: ["Anime about Ninjas", "Whats the best Anime"]
    })
    const q2 = await question.create({
        topic: "Soccer",
        questions: ["Who is the best soccer player", "Whats the worst club"]
    })
    const user1 = await user.create({
        name: "CubeHT"
    })
    const game1 = await game.create({
        questions: [q1, q2],
        creator: user1
    })
}

async function fetch() {
    try {
        const game2 = await game.findById("640750086b4a58abdfb6412d")
        console.log(game2)
    } catch (error) {
        console.log(error.messsage)
    }
}