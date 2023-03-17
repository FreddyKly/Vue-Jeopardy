const mongoose = require("mongoose")

const CategorySchema = new mongoose.Schema({
    topic: {
        type: String,
        minLength: 1,
        required: true
    },
    questions: [{
        question: String,
        gridID: Number,
        edited: {type: Boolean, default: false}
    }],
    answeres: {
        type: [String]
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now(),
        index: { expires: '1440m' }
    }, 
    updatedAt: {
        type: Date,
        default: () => Date.now()
    }
})

module.exports = mongoose.model("Category", CategorySchema)