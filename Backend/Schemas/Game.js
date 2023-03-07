const mongoose = require("mongoose")

const gameSchema = new mongoose.Schema({
    questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
    creator: {type: Schema.Types.ObjectId, ref: 'User'},
    createdAt: Date,
})