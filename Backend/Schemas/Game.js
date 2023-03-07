const mongoose = require("mongoose")
const { Schema } = mongoose;

const gameSchema = new mongoose.Schema({
    questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
    creator: {type: Schema.Types.ObjectId, ref: 'User'},
    createdAt: Date,
})

module.exports = mongoose.model("Game", gameSchema)