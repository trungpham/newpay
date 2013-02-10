/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('Checkout', function(Y, NAME) {

/**
 * The Checkout module.
 *
 * @module Checkout
 */

    /**
     * Constructor for the Controller class.
     *
     * @class Controller
     * @constructor
     */
    Y.namespace('mojito.controllers')[NAME] = {

        /**
         * Method corresponding to the 'index' action.
         *
         * @param ac {Object} The ActionContext that provides access
         *        to the Mojito API.
         */
        index: function(ac) {

            var stack = new Y.Parallel();
            var payments;
            var paymentProfiles;

            ac.models.get('CheckoutModelPayments').getData(stack.add(function(err, data){

                if (err){
                    ac.error(err);
                }else{
                    payments = data;
                }


            }));

            ac.models.get('CheckoutModelPaymentProfiles').getData(stack.add(function(err, data){

                if (err){
                    ac.error(err);
                }else{
                    paymentProfiles = data;
                }


            }));

            stack.done(function(){
                ac.assets.addCss('./index.css');
                ac.done({
                    payments: payments,
                    paymentProfiles: paymentProfiles
                })
            });

        }

    };

}, '0.0.1', {requires: ['mojito',
    'mojito-assets-addon', 'mojito-models-addon', 'parallel', 'handlebars-helpers',
    'CheckoutModelPayments', 'CheckoutModelPaymentProfiles']});
