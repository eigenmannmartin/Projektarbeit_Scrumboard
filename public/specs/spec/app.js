
define([
	'app'
], function() {
	//console.log(Backbone, chai)
	var testsuite = function() {
		//var assert = chai.assert;
		var expect = chai.expect;
		chai.should();


	  	describe('Main App', function () {
	        describe('init', function () {

	        	beforeEach( function () {
			        testsuite.server = sinon.fakeServerWithClock.create();
			        testsuite.server.autoRespond = true;

			        
			    });

			    afterEach( function () {
			        testsuite.server.restore();
			    });

	            it('is defined', function () {
	            	var app = require( "app" );
	            	app.should.not.be.Undefined;
	            });

	            it('can get instantiated', function () {
	            	var app = require( "app" );
	            	var obj = new app();
	            	expect( obj ).to.be.a( 'object' );
	            });

	            it('can start loading', function () {
	            	var app = require( "app" );
	            	var obj = new app();

	            	expect( obj.load ).to.be.a( 'function' );
	            	expect( obj.load() ).to.be.ok;
	            });

	            it('can get started', function () {

					testsuite.server.respondWith("GET", "/api/task",
 					[ 200, {"Content-Type":"application/json"},'[{"id":1,"name":"Update Design","description":"The Design looks ugly, we need a newer, fancier one.","difficulty":"2","state":"todo","createdAt":"2015-03-25T12:05:49.000Z","updatedAt":"2015-03-25T12:05:49.000Z","UserId":2}]' ]);
					
					testsuite.server.respondWith("GET", "/api/user",
 					[ 200, {"Content-Type":"application/json"},'[{"id":1,"username":"7221","first_name":"Shannon","last_name":"Grant","createdAt":"2015-03-25T12:05:49.000Z","updatedAt":"2015-03-25T12:05:49.000Z"},{"id":2,"username":"2234","first_name":"Russo","last_name":"Castro","createdAt":"2015-03-25T12:05:49.000Z","updatedAt":"2015-03-25T12:05:49.000Z"}]' ]);

 				
	            	var app = require( "app" );
	            	var obj = new app();
	            	
	            	obj.load();
	           
	            	expect( obj.start ).to.be.a( 'function' );
	            	expect( obj.start() ).to.be.ok;

	            });


	 
	        });
	    });
	};
	return testsuite();
});
