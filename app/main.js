

var angular = require('angular');
var _c = require('./crypton');
var cryptonJS = function() {
    'use strict';

    var app = angular.module('cryptonJS', []);

    app.init = function()
    {
        _c.info('Starting CryptonJS', _c.version);
        angular.bootstrap(window.document, ['cryptonJS']);
    };


    return app;
}();

cryptonJS.init();
