var angular = require('angular');
var _c = require('./crypton');
var immutable = require('immutable-store');
var io = window.io || require('socket.io-client');

var dependencies = {
    'ui.bootstrap' : require('angular-bootstrap'),
    'ui.router' : require('angular-ui-router'),
    'ui.select' : require('ui-select'),
    'restangular' : require('restangular'),
    'main.feat' : require('./feat/main/main'),
    'ngSanitize' : require('angular-sanitize'),
    'flux' : require('flux-angular'),
    'btford.socket-io' : require('angular-socket-io')
};


var cryptonJS = function() {
    'use strict';

    var inject = [];
    angular.forEach(dependencies, function(val,dependency)
    {
       inject.push(dependency);
    });

    var app = angular.module('cryptonJS', inject);

    app.init = function()
    {
        _c.info('Starting CryptonJS', _c.version);
        angular.bootstrap(window.document, ['cryptonJS']);
    };

    return app;
}();

cryptonJS.init();

