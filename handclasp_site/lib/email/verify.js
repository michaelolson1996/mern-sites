const lib = require('../index')
lib.dotenv.config()
const emailVerifier = require("verifier-node");

const verifyEmail = (req, res) => {
    emailVerifier.verify(req.body.email, process.env.VALIDATOR_TOKEN)
    .then(response => {
        // console.log(response)
        return res.status(200).send(response.field("status"))
    //   console.log(response.valid()); // Boolean
     // Access any field in response
    })
    .catch(err => {
        console.log('error', err)
    });
}

module.exports = verifyEmail;