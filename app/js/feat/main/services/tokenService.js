(function () {
    'use strict';

    var _module = require('./_index.js');

    /**
     * @ngInject
     */
    function TokenService() {
        var service = {};

        service.get = function()
        {
            console.log('OK');
        };

        return service;

    }

    _module.service('TokenService', TokenService);
}());
