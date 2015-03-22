define([
	'underscore',
	'backbone',
	'models/user'
],
function(
	_,
	Backbone,
	mUser
){
	'use strict';

	var Task = Backbone.Model.extend({
		defaults: {},
		initialize: function(){},
	});
 

	var Tasks = Backbone.Collection.extend({
		model: Task,
		url: TASK_API,
		initialize: function(){
			this.fetch();
		},

		addTicket: function( ticket ){
			this.add( ticket );
		},

		save: function(){
			var self = this;
			this.results = [];
			this.each( function(model){
				if( model.hasChanged() ){
					self.results.push( model.save( { silent:true } ) );
				}
			});
			return this.results;
		}
	});
 
	return {
		Model: Task,
		Collection: new Tasks()
	};
 
});

	