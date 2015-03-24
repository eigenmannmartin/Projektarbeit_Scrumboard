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

router.route('/setup').
    get(function(req, res, next) {

        //db.sequelize.sync({force: true})
        
        var users = [
            {"username": "7221", "first_name": "Shannon", "last_name": "Grant"},
            {"username": "2234", "first_name": "Russo", "last_name": "Castro"},
            {"username": "5749", "first_name": "York", "last_name": "Sweeney"},
            {"username": "6836", "first_name": "Mullins", "last_name": "Lopez"},
            {"username": "4571", "first_name": "Griffin", "last_name": "Alston"},
            {"username": "5045", "first_name": "Trujillo", "last_name": "Roberson"},
            {"username": "4383", "first_name": "Dillard", "last_name": "Torres"},
            {"username": "6990", "first_name": "Clay", "last_name": "Hale"},
            {"username": "4942", "first_name": "Cortez", "last_name": "Andrews"},
            {"username": "7055", "first_name": "Palmer", "last_name": "Richardson"},
            {"username": "8016", "first_name": "Mcmahon", "last_name": "Burgess"},
            {"username": "9685", "first_name": "Mack", "last_name": "Walls"},
            {"username": "7251", "first_name": "Salazar", "last_name": "Terry"},
            {"username": "7185", "first_name": "Patel", "last_name": "Elliott"},
            {"username": "6715", "first_name": "Hunt", "last_name": "Hawkins"},
            {"username": "8382", "first_name": "Snider", "last_name": "Solis"},
            {"username": "9064", "first_name": "Wiley", "last_name": "Berry"},
            {"username": "2192", "first_name": "Terrell", "last_name": "Boone"},
            {"username": "6151", "first_name": "Hood", "last_name": "Kaufman"},
            {"username": "9697", "first_name": "Page", "last_name": "Cross"},
            {"username": "3222", "first_name": "Burris", "last_name": "Kirkland"},
            {"username": "9798", "first_name": "Solomon", "last_name": "Macias"},
            {"username": "9253", "first_name": "Barber", "last_name": "Wiggins"},
            {"username": "7115", "first_name": "Mcmahon", "last_name": "Warner"},
            {"username": "9918", "first_name": "Hopkins", "last_name": "Blevins"},
            {"username": "5634", "first_name": "Lindsey", "last_name": "Chase"},
            {"username": "7307", "first_name": "Vincent", "last_name": "Bush"},
            {"username": "7049", "first_name": "Church", "last_name": "Stevens"},
            {"username": "3302", "first_name": "Banks", "last_name": "Frank"},
            {"username": "6761", "first_name": "Tyson", "last_name": "Leonard"},
            {"username": "9738", "first_name": "Goodwin", "last_name": "Hall"}
        ];

        users.forEach( function( user ){
            db.User.create({ username: user['username'], first_name: user['first_name'], last_name: user['last_name'] })
        });

        var tasks = [
            {"name": "Update Design", "desc": "The Design looks ugly, we need a newer, fancier one.", "user": 2, "difficulty": "2", "state": "todo"},
            {"name": "Fancy Animations", "desc": "We need fancy animations.", "user": 8, "difficulty": "8", "state": "progress"},
            {"name": "Update Contacts", "desc": "Implement a real contacts page", "user": 9, "difficulty": "2", "state": "progress"},
            {"name": "Update About", "desc": "Write something nice about this project in the about page", "user": 1, "difficulty": "3", "state": "progress"},
            {"name": "Public this Project", "desc": "Make it publicly acessible via heroku", "user": 5, "difficulty": "5", "state": "done"}
        ];

        tasks.forEach( function( task ){
            db.Task.create({ title: task['title'], description: task['desc'], UserId: task['user'], difficulty: task['difficulty'], state: task['state'] })
        });

        res.json( "ok" );
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



