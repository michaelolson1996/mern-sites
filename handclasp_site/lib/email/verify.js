const lib = require('../index')
lib.dotenv.config()
const emailVerifier = require("verifier-node");

const verifyEmail = (req, res) => {
    emailVerifier.verify(req.body.email, process.env.VALIDATOR_TOKEN)
    .then(response => {
        return res.status(200).send(response.field("status"))
    })
    .catch(err => {
        console.log('error', err)
    });
}

module.exports = verifyEmail;