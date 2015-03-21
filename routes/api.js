var express = require('express');
var router = express.Router();


router.route('/user').
    get(function(req, res, next) {
        db.User.findAll().then(function(result){ 
        	res.json( result ) 
        });
    });

router.route('/user/:user_id').
    get(function(req, res, next) {
    	console.log( req.params )
    	db.User.find( req.params['user_id'] ).then( function( user ){
    		res.json( user );
    	});
    });

module.exports = router;



