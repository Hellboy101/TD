var TD = window.TD || {};

// Main module for Javascript
TD.App = function (document, $, console) {
    'use strict';

    // Initialisation of all other modules
    var init = function() {
        TD.Index.init();
    };

    return {
        init: init
    };
}(window.document, window.jQuery, window.console);

window.jQuery(document).ready(TD.App.init);