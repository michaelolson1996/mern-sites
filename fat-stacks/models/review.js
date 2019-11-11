const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    review: {
        type: String,
        required: true     
    },
    stars: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Review", reviewSchema)