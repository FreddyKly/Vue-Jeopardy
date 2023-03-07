const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
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

module.exports = mongoose.model("User", userSchema)