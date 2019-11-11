const express = require("express")
const User = require("../models/user")
const authRouter = express.Router()
const jwt = require("jsonwebtoken")

authRouter.post("/signup", (req, res) => {
    User.findOne({ username: req.body.username }, (err, existingUser) => {
        if (err) return res.status(500).send({ success: false, err })
        if (existingUser !== null) {
            return res.status(400).send({ success: false, err: "That username already exists" })
        }
        const newUser = new User(req.body)
        newUser.save((err, user) => {
            if (err) return res.status(500).send({ success: false, err })
            const token = jwt.sign(user.toObject(), process.env.SECRET)
            return res.status(201).send({ success: true, user: user.toObject(), token })
        })
    })
})

authRouter.post("/login", (req, res) => {
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
        if (err) return res.status(500).send(err)
        if (!user) {
            return res.status(403).send({ success: false, err: "username or password are incorrect" })
        }
        console.log(user)
        user.checkPassword(req.body.password, (err, match) => {
            console.log(match)
            if (err) return res.status(500).send(err)
            if (!match) res.status(401).send({ success: false, message: "username or password are incorrect" })
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
            return res.send({ token: token, user: user.withoutPassword(), success: true })
        })
    })
})

module.exports = authRouter