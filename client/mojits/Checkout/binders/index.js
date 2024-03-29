/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('CheckoutBinderIndex', function(Y, NAME) {

/**
 * The CheckoutBinderIndex module.
 *
 * @module CheckoutBinderIndex
 */

    /**
     * Constructor for the CheckoutBinderIndex class.
     *
     * @class CheckoutBinderIndex
     * @constructor
     */
    Y.namespace('mojito.binders')[NAME] = {

        /**
         * Binder initialization method, invoked after all binders on the page
         * have been constructed.
         */
        init: function(mojitProxy) {
            this.mojitProxy = mojitProxy;


            if (window.__showProfiles){
                this.showProfileToolTip();
            }

            //register itself with the parent window
        },

        showProfileToolTip: function(){
            YUI().use('ParentProxy', function(Y){
                Y.ParentProxy.execute('newUI', {
                    type: 'toolTip',
                    url: 'http://google',
                    width: 400,
                    height: 200

                });
            });
        },
        /**
         * The binder method, invoked to allow the mojit to attach DOM event
         * handlers.
         *
         * @param node {Node} The DOM node to which this mojit is attached.
         */
        bind: function(node) {
            var me = this;
            this.node = node;
            /**
             * Example code for the bind method:
             *
             * node.all('dt').on('mouseenter', function(evt) {
             *   var dd = '#dd_' + evt.target.get('text');
             *   me.node.one(dd).addClass('sel');
             *
             * });
             * node.all('dt').on('mouseleave', function(evt) {
             *   
             *   var dd = '#dd_' + evt.target.get('text');
             *   me.node.one(dd).removeClass('sel');
             *
             * });
             */

            node.all('payment-options')
        },
        rotatePaymentOptions: function(){

        }

    };

}, '0.0.1', {requires: ['event-mouseenter', 'mojito-client']});
