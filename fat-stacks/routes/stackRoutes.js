const express = require('express')
const stackRouter = express.Router()
Stacks = require('../models/stacks')

stackRouter.route('/')
    .get((req, res) => {
        Stacks.find({ user: req.user._id }, (err, stacks) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(stacks)
        })
    })
    .post((req, res) => {
        const newStack = new Stacks(req.body)
        newStack.save((err, newSavedStack) => {
            if (err) return res.status(500).send(err)
            return res.status(201).send(newSavedStack)
        })
    })

stackRouter.route('/:id')
    // .get((req, res) => {
    //     console.log(req.params)
    //     Stacks.findOne({ _id: req.params.id }, (err, foundStack) => {
    //         console.log(foundStack)
    //         if (err) return res.status(500).send(err)
    //         return res.status(201).send(foundStack)
    //     })
    // })
    .delete((req, res) => {
        Stacks.findOneAndRemove({ _id: req.params.id }, (err, deletedStack) => {
            if (err) return res.status(500).send(err)
            return res.status(202).send(console.log(deletedStack, "deleted"))
        })
    })

    module.exports = stackRouter