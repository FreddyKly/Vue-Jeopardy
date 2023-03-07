const mongoose = require('mongoose')
const game = require("./Schemas/Game")
const user = require("./Schemas/User")
const question = require("./Schemas/Questions")

mongoose.connect("mongodb+srv://freddykly:RatDetector@cluster0.4wp40qf.mongodb.net/Jeopardy")

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