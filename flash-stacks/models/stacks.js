const mongoose = require("mongoose")
const Schema = mongoose.Schema

const stackSchema = new mongoose.Schema({
    stack: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Stacks", stackSchema)