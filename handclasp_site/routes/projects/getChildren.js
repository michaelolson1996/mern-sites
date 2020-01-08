const express = require('express');
const router = express.Router();
const getChildren = require('../../lib/sheets/children');

const myChildrenLogger = (req, res, next) => {
    console.log('Logged to children route');
    next();
};

router.use(myChildrenLogger);

router.route('/')
    .get((req, res) => {
        getChildren(req, res);
    });

module.exports = router;