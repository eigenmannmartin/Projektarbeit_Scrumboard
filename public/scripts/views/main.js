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
            self.childs = Array();
            this.collections = options.collections;
            this.collections.tasks.each( function(e){
                self.childs.push( new vTask({ task: e }) )
            });

            this.render();

        },
        
        render: function(){
            var self = this;
            this.$el.empty();
            this.$el.append( template({
                'tasks': self.childs
            }));
            this.$el.show();

            return this;
        },
    });
    return MainView;
});