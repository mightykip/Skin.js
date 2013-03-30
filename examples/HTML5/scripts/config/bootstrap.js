requirejs.config({
  baseUrl: 'scripts',
  paths: {
    'jquery': 'libs/jquery-1.9.1.min',
    'Backbone': 'libs/backbone-min',
    'underscore': 'libs/underscore-min',
    'Skin': '../../../dist/skin-min'
  },
  shim: {
    'Backbone': {
      deps: ['libs/json2', 'underscore', 'jquery'],
      exports: 'Backbone'
    },
    'underscore': {
      exports: '_'
    },
    'Skin': {
      deps: ['Backbone'],
      exports: 'Skin'
    }
  }
});

require(['jquery', 'application'], function($, application) {
  $(function() {
    application.start();
  });
});