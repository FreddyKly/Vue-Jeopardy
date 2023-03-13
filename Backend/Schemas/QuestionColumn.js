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
        default: () => Date.now()
    }, 
    updatedAt: {
        type: Date,
        default: () => Date.now()
    }, 
    expireAt: { 
        type: Date, 
        expires: 60 * 60 * 24, 
        default: () => Date.now() 
    }
})

module.exports = mongoose.model("QuestionColumn", questionColumnSchema)