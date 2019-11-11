const express = require('express')
const reviewRouter = express.Router()
Reviews = require('../models/review')

reviewRouter.route('/')
    .get((req, res) => {
        Reviews.find((err, reviews) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(reviews)
        })
    })
    .post((req, res) => {
        const newReview = new Reviews(req.body)
        newReview.save((err, newSavedReview) => {
            if (err) return res.status(500).send(err)
            return res.status(201).send(newSavedReview)
        })
    })

    module.exports = reviewRouter