define([
    'backbone',
    'underscore',
    'views/task',
    'text!templates/main.tpl'
],
function(
    Backbone,
    _,
    vTask,
    tMain

){
    'use strict';
    var template = _.template( tMain );

    var MainView = Backbone.View.extend({
        display:'',
        events : {},

        initialize: function( options ){
            var self = this;
            this.collections = options.collections;
            this.render();

            this.boards = Array()
            this.boards.icebox = this.$el.find("#icebox");
            this.boards.todo = this.$el.find("#todo");
            this.boards.work = this.$el.find("#work");
            this.boards.done = this.$el.find("#done");  
            
            
            
            this.collections.tasks.each( function(e){
                new vTask({ boards: self.boards, task: e });
            });

        },
        
        render: function(){
            this.$el.empty();
            this.$el.append( template() );
            this.$el.show();
            return this;
        },
    });
    return MainView;
});