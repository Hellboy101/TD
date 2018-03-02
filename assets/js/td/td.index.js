var TD = window.TD || {};

// Module for index page
TD.Index = function (document, $, console) {
    'use strict';

    var init = function() {
        // Initialisation of all the tooltips in the page
        $('[data-toggle="tooltip"]').tooltip();
    };

    return {
        init: init
    };
}(window.document, window.jQuery, window.console);
