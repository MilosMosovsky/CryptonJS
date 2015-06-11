/**
 * @ngInject
 */
function Crypton() {
    'use strict';

    var _console = {
        log : function() {
           if(window.console) {window.console.log.apply(window.console, arguments);}
        },
        info : function() {
            if(window.console) {window.console.info.apply(window.console, arguments);}
        }
    };
    return {
        version : '0.0.1-Alpha',
        log : _console.log,
        info : _console.info
    };
}

module.exports = new Crypton();