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
        events : {
            'click' : 'click'
        },

        initialize: function( options ){
            this.task = options.task;
            this.boards = options.boards;

            this.updateTask();
            this.listenTo( this.task, 'change', this.updateTask );
            return this;
        },

        click: function(){
            
        },

        updateTask: function(){
            console.log( "update" );
            if( this.task.get( 'state' ) == null || this.task.get( 'state' ) == 'icebox' ) 
                this.rootel = this.boards.icebox;
            if( this.task.get( 'state' ) == 'todo' ) this.rootel = this.boards.todo;
            if( this.task.get( 'state' ) == 'progress' ) this.rootel = this.boards.work;
            if( this.task.get( 'state' ) == 'done' ) this.rootel = this.boards.done;

            this.render();
        },
        
        render: function(){
            this.$el.html( template({
                    'title': this.task.get( 'name' ),
            }));


            this.rootel.append( this.$el )

            return this.$el
        },
    });
    return MainView;
});