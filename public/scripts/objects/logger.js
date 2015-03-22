define(['backbone'], function(){
	'use strict';
	var Logger = Backbone.Model.extend({

		count: 0,

		log: function( msg ){
			console.log( this.count + ': ' + msg );
			this.count += 1;
		},

		ilog: function( msg ){
			console.log( this.count + ': ----------------/////////////////+ ' + msg + ' +/////////////////----------------' );
			this.count += 1;
		},

		raw: function( raw ){
			console.log( raw );
			this.count += 1;
		}

	});

	return new Logger();
});

