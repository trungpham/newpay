/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('demoModelFoo', function(Y, NAME) {

/**
 * The demoModelFoo module.
 *
 * @module demo
 */

    /**
     * Constructor for the demoModelFoo class.
     *
     * @class demoModelFoo
     * @constructor
     */
    Y.namespace('mojito.models')[NAME] = {

        init: function(config) {
            this.config = config;
        },

        /**
         * Method that will be invoked by the mojit controller to obtain data.
         *
         * @param callback {function(err,data)} The callback function to call when the
         *        data has been retrieved.
         */
        getData: function(callback) {
            callback(null, { some: 'data' });
        }

    };

}, '0.0.1', {requires: []});
