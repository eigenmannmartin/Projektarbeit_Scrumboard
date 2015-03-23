define([
    'backbone',
    'text!templates/main.tpl'
],
function(
    Backbone,
    tMain

){
    'use strict';
    var template = _.template( tMain );

    var MainView = Backbone.View.extend({
        display:'',
        events : {},

        initialize: function( options ){
            this.collections = options.collections;
        },
        
        render: function(){
            this.$el.empty();
            this.$el.append( tMain );
            this.$el.show();
            return this;
        },
    });
    return MainView;
});