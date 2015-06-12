(function () {
    'use strict';

var angular = require('angular');
var bulk = require('bulk-require');

bulk(__dirname, ['./**/**/_index.js']);

module.exports = angular.module('main.feat', ['main.services']);
}());