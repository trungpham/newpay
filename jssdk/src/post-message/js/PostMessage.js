/**
 * Provides post-message
 *
 * @module post-message
 *
**/

Y[NAME] = {
    init: function(){
        //native bind
        var _this = this;
        this._addListener(window, 'message', function(e){

            var messagePairs = e.data.split('-', 2);

            var isPostMessage = messagePairs[0] === 'postMessage';

            if (isPostMessage){

                var payLoad = Y.JSON.parse(messagePairs[1]);

                _this.fire(payLoad.eventName, payLoad.data, e.source);
            }
        });
    },
    cleanUp: function(){

    },
    /**
     * Listen to post message
     *
     * @param eventName
     * @param callback
     */
    bind: function(eventName, callback){
        this.on(eventName, callback);
    },

    _addListener: function (el, ev, fn) {
        if (el.addEventListener) {
            el.addEventListener(ev, fn, false);
        } else if (el.attachEvent) {
            el.attachEvent('on'+ev, fn);
        } else {
            el['on'+ev] = fn;
        }
    },
    /**
     * send the a message to the desired window.
     *
     * @param eventName the event name
     * @param data the payload
     * @param target {window} the window that the message is supposed to go to
     * @param targetURL used for older browser
     */
    send: function(eventName, data, target, targetURL){

        var payLoad = {eventName: eventName, data: data};
        var message = 'postMessage-'+ Y.JSON.stringify(payLoad);

        target.postMessage(message, '*');
    }
}

Y.augment(Y[NAME], Y.EventTarget);