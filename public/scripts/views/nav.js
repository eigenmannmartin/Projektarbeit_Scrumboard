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
            this.render();
        },

        link: function( args ){
            if( args.currentTarget.hash == '' ){
                return false;
            }

            if( args.currentTarget.hash == '#about' ){
                alert("Das ist eine Projektarbeit und nicht für die produktive Verwendung gedacht.")
                return false;
            }

            if( args.currentTarget.hash == '#contact' ){
                alert("Github: eigenmannmartin")
                return false;
            }
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