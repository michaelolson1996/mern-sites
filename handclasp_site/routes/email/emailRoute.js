const express = require('express')
const router = express.Router()
const sendEmail = require('../../lib/email/transporter')

const myEmailLogger = (req, res, next) => {
    console.log('Logged to email route')
    next()
}

router.use(myEmailLogger)

router.route('/')
    .post((req, res) => {
        sendEmail(req, res)
    })

module.exports = router