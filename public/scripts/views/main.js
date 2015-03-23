define([
    'backbone',
],
function(
    Backbone

){
    'use strict';
    //var template = _.template(TemplateMain);

    var MainView = Backbone.View.extend({
        display:'',
        events : {},

        initialize: function( options ){
            this.collections = options.collections;
        },
        
        render: function(){
            this.$el.empty();
            this.$el.append( "main" );
            this.$el.show();
            return this;
        },
    });
    return MainView;
});