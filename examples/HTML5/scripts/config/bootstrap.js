requirejs.config({
  baseUrl: 'scripts',
  paths: {
    'jquery': 'libs/jquery-1.9.1.min',
    'Backbone': 'libs/backbone-min',
    'underscore': 'libs/underscore-min'
  },
  shim: {
    'Backbone': {
      deps: ['libs/json2', 'underscore', 'jquery'],
      exports: 'Backbone'
    },
    'underscore': {
      exports: '_'
    }
  }
});

require(['jquery', 'application'], function($, application) {
  $(function() {
    application.start();
  });
});