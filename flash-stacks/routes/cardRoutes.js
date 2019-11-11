const express = require('express')
const cardRouter = express.Router()
const Cards = require('../models/card')

cardRouter.route('/')
    // .get((req, res) => {
    //     Cards.find((err, cards) => {
    //         if (err) return res.status(500).send(err)
    //         return res.status(200).send(cards)
    //     })
    // })
    .post((req, res) => {
        const newCard = new Cards(req.body)
        newCard.save((err, newSavedCard) => {
            if (err) return res.status(500).send(err)
            return res.status(201).send(newSavedCard)
        })
    })

cardRouter.route('/:id')
    .get((req, res) => {
        console.log(req.params)
        Cards.find({ title: req.params.id }, (err, foundCards) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(foundCards)
        })
    })
    .delete((req, res) => {
        Cards.findOneAndRemove({ _id: req.params.id}, (err, deletedCard) => {
                if (err) return res.status(500).send(err)
                return res.status(203).send(deletedCard)
            }
        )
    })

    // .put((req, res) => {
    //     Cards.findOneAndUpdate(
    //         { _id: req.params.id },
    //         req.body,
    //         { new: true },
    //         (err, updatedCard) => {
    //             if (err) return res.status(500).send(err)
    //             return res.status(201).send(updatedCard)
    //         }
    //     )
    // })


    module.exports = cardRouter


