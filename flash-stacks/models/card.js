const mongoose = require("mongoose")
const Schema = mongoose.Schema

const cardSchema = new mongoose.Schema({
    cardFront: {
        type: String,
        required: true
    },
    cardBack: {
        type: String,
        required: true
    }, 
    title: {
        type: Schema.Types.ObjectId,
        ref: "Stacks",
        required:true
    }
})

module.exports = mongoose.model("Card", cardSchema)