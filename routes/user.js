var express = require('express');
var router = express.Router();


router.route('/').
    all(function(req, res, next) {
        db.User.findAll().then(function(result){ res.json(result) });
    });

router.route('/add/').
    all(function(req, res, next) {
        res.json(db.User.create({ username: 'eim', first_name: 'Martin', last_name: "Eigenmann" }));
    });

module.exports = router;



