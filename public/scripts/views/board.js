define([
    'backbone',
    'underscore',
    'views/task'
],
function(
    Backbone,
    _,
    vTask

){
    'use strict';

    var MainView = Backbone.View.extend({
        display:'col-md-3',
        events : {},

        initialize: function( options ){
            var self = this;
            
            this.tasks = options.tasks;
            this.name = options.name;
            this.rootel = options.el;

            this.vTasks = Array();
            this.tasks.each( function(e){
                self.vTasks.push( new vTask({ task: e }) )
            });

            this.rootel.append( this.$el );
            console.log( this.rootel.html() )

            this.render();

        },
        
        render: function(){
            this.$el.empty();
            this.$el.append("hey!");
            this.$el.show();

            return this;
        },
    });
    return MainView;
});