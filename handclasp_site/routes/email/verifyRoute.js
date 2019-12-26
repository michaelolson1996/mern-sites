const express = require('express');
const router = express.Router();
const verifyEmail = require('../../lib/email/verify')

const myValidateLogger = (req, res, next) => {
    console.log('Logged to email verify route')
    next()
}

router.use(myValidateLogger)

router.route('/')
    .post((req, res) => {
        verifyEmail(req, res)
    })

module.exports = router