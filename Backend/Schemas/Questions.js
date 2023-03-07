const mongoose = require("mongoose")

const questionSchema = new mongoose.Schema({
    topic: {
        type: String,
        minLength: 1,
        required: true
    },
    questions: {
        type: [String],
        required: true
    },
    answeres: {
        type: [String]
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    }, 
    updatedAt: {
        type: Date,
        default: () => Date.now()
    }, 
})

module.exports = mongoose.model("Question", questionSchema)