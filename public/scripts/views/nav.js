define([
    'backbone',
    'text!templates/nav.tpl'
],
function(
    Backbone,
    tNav

){
    'use strict';
    var template = _.template(tNav);

    var NavView = Backbone.View.extend({
        display:'',
        events : {
            'click a'   : "link" 
        },

        initialize: function( options ){
            this.collections = options.collections;
            this.$el = options.el;
            this.render();
        },

        link: function( args ){
            if( args.currentTarget.hash == '' ){
                console.log( "Home" );
            }

            if( args.currentTarget.hash == '#about' ){
                console.log( "About" );
            }

            if( args.currentTarget.hash == '#contact' ){
                console.log( "Contact" );
            }

            args.preventDefault();
        },
        
        render: function(){
            this.$el.empty();
            this.$el.append( template );
            this.$el.show();
            return this;
        },
    });
    return NavView;
});