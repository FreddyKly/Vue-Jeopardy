const mongoose = require("mongoose")
const { Schema } = mongoose;

const gameSchema = new mongoose.Schema({
    categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
    creator: {type: Schema.Types.ObjectId, ref: 'User'},
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

module.exports = mongoose.model("Game", gameSchema)