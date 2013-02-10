YUI.add('handlebars-getter', function(Y, NAME){
    Y.namespace('mojito')[NAME] = Y.Handlebars;
}, '0.0.1', {requires: ['handlebars']});