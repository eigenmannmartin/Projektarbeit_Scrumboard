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
    	db.User.find( req.params['user_id'] ).then( function( user ){
    		res.json( user );
    	});
    });


router.route('/task').
    get(function(req, res, next) {
        db.Task.findAll().then(function(result){ 
        	res.json( result ) 
        });
    }).
    post(function(req, res, next) {
        db.Task.create({}).success( function( task ){
            res.json( task );
        } );

    });

router.route('/task/:task_id').
    get(function(req, res, next) {
    	db.Task.find( req.params['task_id'] ).then( function( Task ){
    		res.json( Task );
    	});
    }).
    put(function(req, res, next) {
        db.Task.find( req.params['task_id']).then( function( Task ){
            //Task = req.body
            Task.name = req.body['name'];
            Task.description = req.body['description'];
            Task.state = req.body['state'];
            Task.UserId = req.body['UserId'];
            Task.difficulty = req.body['difficulty'];
            Task.save();
            res.json( Task );
        });
    }).
    delete(function(req, res, next) {
        db.Task.find( req.params['task_id']).then( function( Task ){
            Task.destroy();
        });
    })

module.exports = router;



