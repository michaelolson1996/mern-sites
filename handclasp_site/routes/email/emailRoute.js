const express = require('express')
const router = express.Router()
const sendEmail = require('../../lib/email/validate')

const myValidateLogger = (req, res, next) => {
    console.log('Logged to email route')
    next()
}

router.use(myValidateLogger)

router.route('/')
    .post((req, res) => {
        sendEmail(req, res);
    })

module.exports = router