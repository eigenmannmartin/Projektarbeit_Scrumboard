define([
    'backbone',
    'text!templates/task.tpl'
],
function(
    Backbone,
    tTask

){
    'use strict';
    var template = _.template( tTask );

    var MainView = Backbone.View.extend({
        display:'',
        events : {},

        initialize: function( options ){
            this.task = options.task;
            this.render();

            this.listenTo( this.task, 'change', this.updateTask );

            return this;
        },

        updateTask: function(){
            console.log( "update" );
            this.render();
        },
        
        render: function(){
            this.$el.empty();
            this.$el.append( template({
                    'title': this.task.get( 'name' ),
            }));
            this.$el.show();
            return this.$el
        },
    });
    return MainView;
});