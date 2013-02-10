/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('CheckoutModelPaymentProfiles', function(Y, NAME) {

    /**
     * The CheckoutModelPaymentProfiles module.
     *
     * @module Checkout
     */

    /**
     * Constructor for the CheckoutModelPaymentProfiles class.
     *
     * @class CheckoutModelPaymentProfiles
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

            var url = "http://localhost:9000/api/paymentProfiles"
            Y.mojito.lib.REST.GET(url, null, null, function(err, response) {
                callback(err, Y.JSON.parse(response.getBody()));
            });

//            callback(null, [
//
//
//                {
//                    type: "CreditCard",
//                    cardBrand: "Visa",
//                    last4: "4448",
//                    expiryMonth: "10",
//                    expiryYear: "14"
//                },
//                {
//                    type: "CreditCard",
//                    cardBrand: "MasterCard",
//                    last4: "4448",
//                    expiryMonth: "9",
//                    expiryYear: "15"
//                },
//                {
//                    type: "PayPal",
//                    maskedEmail: "**user1@gmail.com"
//                },
//                {
//                    type: "PayPal",
//                    maskedEmail: "***user2@gmail.com"
//                }
//
//
//            ]);
        }

    };

}, '0.0.1', {requires: []});
