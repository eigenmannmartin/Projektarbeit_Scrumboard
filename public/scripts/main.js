require.config({
    paths : {
        backbone : '../components/backbone/backbone',
        underscore : '../components/underscore/underscore',
        jquery : '../components/jquery/jquery',
        text : '../components/requirejs/text',
        logger : 'objects/logger',
        notify : 'objects/notify',
        nprogress : '../components/nprogress/nprogress-adapter'

    },
    shim : {
        jquery : {
            exports : '$'
        },
        underscore : {
            exports : '_'
        },
        backbone : {
            deps : ['jquery', 'underscore'],
            exports : 'Backbone'
        },
        logger : {
            exports : 'L'
        }
    }
});

require([
    'backbone',
    'notify',
],
function (
    Backbone,
    N
){
    'use strict';

    var Main = Backbone.Model.extend({
        initialize: function(){
            this.view = null;
            // loading and exporting app object
            require( ['app'], function( App ){
                window.app = new App();
                var req = window.app.load();
                N.progress( req );
                //console.log('loading...')
                $.when.apply( $, req ).done( function(){
                    // start app after all was loaded ;-)
                    //console.log('done.');
                    window.app.start();
                    Backbone.history.start( {pushState: true} );
                });
            });
        },

    });
    var main = new Main();
});
