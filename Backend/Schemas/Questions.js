const mongoose = require("mongoose")

const questionSchema = new mongoose.Schema({
    topic: String,
    createdAt: Date,
    questions: [String],
    answeres: [String]
})