var TD = window.TD || {};

TD.Index = function (document, $, console) {
    'use strict';

    var init = function() {
        $('[data-toggle="tooltip"]').tooltip();
    };

    return {
        init: init
    };
}(window.document, window.jQuery, window.console);
