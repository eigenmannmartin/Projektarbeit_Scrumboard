define([
	'underscore',
	'backbone'
],
function(
	_,
	Backbone
){
	'use strict';

	var User = Backbone.Model.extend({});
	var Users = Backbone.Collection.extend({
		model: User,
		url: USER_API,
		initialize: function(){
			this.fetch();
		},
	});
 
	return {
		Model: User,
		Collection: new Users()
	};
 
});