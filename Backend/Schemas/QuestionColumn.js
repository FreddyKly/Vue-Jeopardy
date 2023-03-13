const mongoose = require("mongoose")

const questionColumnSchema = new mongoose.Schema({
    topic: {
        type: String,
        minLength: 1,
        required: true
    },
    questions: [{
        question: String,
        gridID: Number
    }],
    answeres: {
        type: [String]
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now(),
        index: { expires: '1m' }
    }, 
    updatedAt: {
        type: Date,
        default: () => Date.now()
    }
})

module.exports = mongoose.model("QuestionColumn", questionColumnSchema)