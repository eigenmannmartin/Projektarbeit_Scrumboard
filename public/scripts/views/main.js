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
        events : {
            'click #addnew': 'addnew'
        },

        initialize: function( options ){
            var self = this;
            this.collections = options.collections;

            this.render();

            console.log( this.$el )

            this.boards = Array()
            this.boards.icebox = this.$el.find("#icebox");
            this.boards.todo = this.$el.find("#todo");
            this.boards.work = this.$el.find("#work");
            this.boards.done = this.$el.find("#done");  

            console.log( this.boards.icebox )
            console.log( this.boards.todo )
            
            this.collections.tasks.each( function(e){
                new vTask({ boards: self.boards, task: e, users: self.collections.users });
            });

        },

        addnew: function(){
            new vTask({ boards: this.boards, task: this.collections.tasks.create(), users: this.collections.users });
        },
        
        render: function(){
            this.$el.empty();
            this.$el.html( template );
            this.$el.show();
            return this;
        },
    });
    return MainView;
});