YUI.add('handlebars-getter', function(Y, NAME){
    Y.namespace('mojito')[NAME] = require('yui/handlebars').Handlebars;
}, '0.0.1', {requires: ['handlebars']});