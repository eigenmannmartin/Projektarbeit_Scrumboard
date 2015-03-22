require.config({
    paths : {
        backbone : '../public/components/backbone/backbone',
        underscore : '../public/components/underscore/underscore',
        jquery : '../public/components/jquery/jquery',
        text : '../public/components/requirejs/text',
        logger : '../public/objects/logger',
        notify : '../public/objects/notify',
        nprogress : '../public/components/nprogress/nprogress-adapter',

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
	'backbone'
], function() {
	mocha.setup('bdd')
  require([
  		'backbone',
		  'spec/app',
	], function(b) {
	  	mocha.run();
	});
});