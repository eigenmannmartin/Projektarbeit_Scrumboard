define([
	'logger',
	'notify',
	'underscore',
	'backbone',
	'text!templates/app.tpl',
	'views/main',
	'views/nav',
	'models/task',
	'models/user'
], function (
	L,
	N,
	_,
	A,
	tplApp,
	vMain,
	vNav,
	mTasks,
	mUsers
){
	'use strict';

	var template = _.template( tplApp );

	var Router = Backbone.Router.extend({
		routes: {
			'': 'URLmain'
		},

		URLmain: function(){
			this.setMainView( new vMain( { el: this.cel.main, collections: this.collections} ) );
		},


		setMainView: function( view, area ){
			if( this.childs.main ){
				this.childs.main.unbind();
				this.childs.main.remove();
			}
			this.childs.main = view;
			this.el.main.html( this.childs.main.render().$el );
		},

		load: function(){

			this.collections = {
				tasks : mTasks.Collection,
				users : mUsers.Collection,
			};

			return _.invoke( this.collections, 'fetch' );
		},

		start: function(){
			// just for global reference
			this.router = this;

			this.$el = $( '#master' );
			this.$el.html( template() );
			this.$el.show();

			this.cel = {
				navi : $( '#nav' ),
				main : $( '#main' ),
			};

			this.childs = {
				navi : new vNav( {el: this.cel.navi, collections: this.collections} ),
				main : null,
			};

			return true;
			
		},
	});
	return Router;
});