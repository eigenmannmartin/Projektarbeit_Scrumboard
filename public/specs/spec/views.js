
define([
	'views/main',
	'views/nav',
	'views/task',

], function() {
	//console.log(Backbone, chai)
	var testsuite = function() {
		//var assert = chai.assert;
		var expect = chai.expect;
		chai.should();


	  	describe('Views', function () {
	        describe('init', function () {

	        	beforeEach( function () {
			    });

			    afterEach( function () {
			    });

	            it('main', function () {
	            	require( 'views/main' ).should.be.a( 'function' );
	            });

	            it('nav', function () {
	            	require( 'views/nav' ).should.be.a( 'function' );
	            });
	            
	            it('task', function () {
	            	require( 'views/task' ).should.be.a( 'function' );
	            });

	        });
	    });
	};
	return testsuite();
});
