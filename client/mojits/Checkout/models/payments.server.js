/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('CheckoutModelPayments', function(Y, NAME) {

/**
 * The CheckoutModelPayments module.
 *
 * @module Checkout
 */

    /**
     * Constructor for the CheckoutModelPayments class.
     *
     * @class CheckoutModelPayments
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
//            callback(null, [
//
//                {
//                    type: "CreditCard",
//                    acceptedCardBrands: ["Visa", "MasterCard", "Discover", "AmericanExpress"]
//                },
//                {
//                    type: "PayPal"
//                }
//
//            ]);

            var url = "http://localhost:9000/api/payments"
            Y.mojito.lib.REST.GET(url, null, null, function(err, response) {
                callback(err, Y.JSON.parse(response.getBody()));
            });
        }

    };

}, '0.0.1', {requires: ['mojito', 'mojito-rest-lib']});
