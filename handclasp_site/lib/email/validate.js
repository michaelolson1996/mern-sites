const sendForm = require('./transporter');

const validateEmail = (req, res) => {
    sendForm(req, res);
}

module.exports = validateEmail