const express = require('express');
const router = express.Router();
const user = require('../../services/user');

router.get('/', function(req, res, next) {
    res.render('index');
});

module.exports = router;