define([
	'logger',
	'notify',
	'underscore',
	'backbone',
	'text!templates/main.tpl',
	'views/main',
	'models/task',
	'models/user'
], function (
	L,
	N,
	_,
	A,
	tplApp,
	vMain,
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
			this.setMainView( new vMain( {collections: this.collections} ) );
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
				tickets : mTasks.Collection,
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

			this.el = {
				navi : $( 'nav' ),
				main : $( '#main' ),
			};

			this.childs = {
				navi : null, //new vNav( this.el.navi, this.collections ),
				main : null,
			};


			this.listenTo( this.collections.tickets, 'change', this.updateTickets );
			this.listenTo( this.collections.users, 'change', this.updateUsers );


			return true;
			
		},
		updateTickets: function(){
		},
		updateUsers: function(){
		}
	});
	return Router;
});