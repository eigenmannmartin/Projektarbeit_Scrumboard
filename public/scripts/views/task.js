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
            'change #title' : 'changeTitle',
            'change #description': 'changeDescription',
            'change #user' : 'changeUser',
            'change #difficulty': 'changeDifficulty',
            'click  #delete': 'delete',
            'click  #next': 'next',
        },

        initialize: function( options ){
            this.task = options.task;
            this.boards = options.boards;
            this.users = options.users;

            this.updateState();
            this.user = this.users.get( this.task.get( 'UserId' ) );
            this.render();

            //this.listenTo( this.task, 'change', this.updateTask );
            //this.listenTo( this.task, 'change:state', this.updateState );
            return this;
        },

        click: function(){
            
        },

        changeTitle: function( args ){
            this.task.set({name: args.target.value });
            this.updateTask();
        },

        changeDescription: function( args ){
            this.task.set({description: args.target.value });
            this.updateTask();
        },

        changeUser: function( args ){
            this.task.set({UserId: args.target.value });
            this.updateTask();
        },

        changeDifficulty: function( args ){
            this.task.set({difficulty: args.target.value });
            this.updateTask();
        },

        delete: function( args ){
            this.task.destroy();
            this.$el.remove();
            args.preventDefault();
        },

        next: function( args ){
            if( this.task.get( 'state' ) == null || this.task.get( 'state' ) == 'icebox' ){
                this.task.set({state: 'todo'});
            
            }else if( this.task.get( 'state' ) == 'todo' ){
                this.task.set({state: 'progress'});
            }else if( this.task.get( 'state' ) == 'progress' ){
                this.task.set({state: 'done'});
            }

            this.updateState();
            this.updateTask();
            args.preventDefault();
        },

        updateState: function(){
            if( this.task.get( 'state' ) == null || this.task.get( 'state' ) == 'icebox' ) 
                this.rootel = this.boards.icebox;
            if( this.task.get( 'state' ) == 'todo' ) this.rootel = this.boards.todo;
            if( this.task.get( 'state' ) == 'progress' ) this.rootel = this.boards.work;
            if( this.task.get( 'state' ) == 'done' ) this.rootel = this.boards.done;
            this.rootel.append( this.$el )
        },

        updateTask: function(){
            this.user = this.users.get( this.task.get( 'UserId' ) );
            this.render();
            this.task.save();
        },
        
        render: function(){
            this.$el.html( template({
                    'title': this.task.get( 'name' ),
                    'description': this.task.get( 'description' ),
                    'difficulty': this.task.get( 'difficulty' ),
                    'state': this.task.get( 'state' ),
                    'user' : this.user,
                    'users' : this.users,

            }));

            return this.$el
        },
    });
    return MainView;
});