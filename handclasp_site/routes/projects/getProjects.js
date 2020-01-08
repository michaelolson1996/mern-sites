const express = require('express');
const router = express.Router();
const getProjects = require('../../lib/sheets/projects');

const myProjectLogger = (req, res, next) => {
    console.log('Logged to projects route');
    next();
};

router.use(myProjectLogger);

router.route('/')
    .get((req, res) => {
        getProjects(req, res);
    });

module.exports = router;