
require.config({
    baseUrl: "../scripts/",
    paths : {
        backbone : '../components/backbone/backbone',
        underscore : '../components/underscore/underscore',
        jquery : '../components/jquery/jquery',
        text : '../components/requirejs/text',
        logger : 'objects/logger',
        notify : 'objects/notify',
        nprogress : '../components/nprogress/nprogress-adapter',
        jasmine: '../components/jasmine/jasmine',
        'jasmine-html': '../components/jasmine/jasmine-html'

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
        },
        jasmine: {
          exports: 'jasmine'
        },
        'jasmine-html': {
          deps: ['jasmine'],
          exports: 'jasmine'
        }
    }
});


require(['underscore', 'jquery', 'backbone', 'jasmine'], function(_, $, backbone, jasmine){
  console.log( jasmine )
  var jasmineEnv = jasmine.getEnv();
  jasmineEnv.updateInterval = 1000;

  var htmlReporter = new jasmine.HtmlReporter();

  jasmineEnv.addReporter(htmlReporter);

  jasmineEnv.specFilter = function(spec) {
    return htmlReporter.specFilter(spec);
  };

  var specs = [];

  specs.push('spec/models');
  specs.push('spec/app');
  specs.push('spec/views');

  $(function(){
    require(specs, function(){
      jasmineEnv.execute();
    });
  });

});
