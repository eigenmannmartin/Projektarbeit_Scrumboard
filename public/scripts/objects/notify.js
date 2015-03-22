define(['backbone',
		'jquery',
		'nprogress'
		], function( Backbone, $, Progress ){
	'use strict';
	var Notify = Backbone.Model.extend({

		$el: $( '#notify' ),

		info: function( msg ){
			this.$el.hide();
			this.$el.attr( 'class', 'alert alert-info' );
			this.$el.html( msg );
			this._animate();
		},

		error: function( msg ){
			this.$el.hide();
			this.$el.attr( 'class', 'alert alert-danger' );
			this.$el.html( msg );
			this._animate();
		},

		success: function( msg ){
			this.$el.hide();
			this.$el.attr( 'class', 'alert alert-success' );
			this.$el.html( msg );
			this._animate();
		},

		_animate: function(){
			this.$el.stop().slideDown( 'fast' ).delay( 10000 ).slideUp( 'fast' );
		},

		progress: function( args ){
			if( args instanceof Array ){
				$.when.apply( $, args ).done( function( args ){
					Progress.done();
				});
			} else {
				args.done( function( args ){
					Progress.done();
				});
			}
			Progress.start();
		},
	});

	return new Notify();
});

