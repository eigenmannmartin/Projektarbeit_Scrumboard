var express = require('express');
var router = express.Router();
var passport = require('passport');


router.route('/login').
    post(function(req, res, next) {
    	console.log( req.params.username );
        console.log( passport.authenticate('local') );
    });

router.route('/status').
    get(function(req, res, next) {
    	console.log( passport );
        res.json( {'logged_in': false} )
    });


module.exports = router;



