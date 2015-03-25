
define([
	'app',
	'models/user',
	'models/task'

], function() {
	var testsuite = function() {
	


	  	describe('Models', function () {
	        describe('init', function () {

	        	beforeEach( function () {
			    });

			    afterEach( function () {
			    });

	            it('change', function () {
	            	var change = require( 'models/task' );
	            	change.should.be.a( 'object' );
	            });

	            it('settings', function () {
	            	var settings = require( 'models/user' );
	            	settings.should.be.a( 'object' );
	            });
	 
	        });
	    });
	};
	return testsuite();
});
