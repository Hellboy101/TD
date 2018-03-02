var TD = window.TD || {};

TD.App = function (document, $, console) {
    'use strict';

    var init = function() {
        TD.Index.init();
    };

    return {
        init: init
    };
}(window.document, window.jQuery, window.console);

window.jQuery(document).ready(TD.App.init);