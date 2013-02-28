YUI.add('ParentProxy', function(Y, NAME){


    Y[NAME] = {

        _windowId: null, //the Id of the this window,
        _callbacks: {}, //call back function hash map
        /**
         * Set up the proxy listener
         */
        init: function(){
            this.targetWindow = window.parent;
            this.targetURL = document.referrer;

            this.bindExecuteResult();
            this.register();
        },
        /**
         * Register this window with the parent window.
         *
         *
         */
        register: function(){
            var _this = this;
            var bindWindowIdFunc = function(windowId){
                _this._windowId = windowId;
            };
            var registerFunction = function(){
                _this.execute('register', null, bindWindowIdFunc);
            };
            registerFunction();
            var testFunction = function(){
                if (!_this._windowId){
                    registerFunction();
                    setTimeout(testFunction, 100);
                }
            };
            testFunction(); //keep repeating until it has been registered.

        },
        /**
         * Run an command on the targetWindow
         * @param command
         * @param args
         * @param callback
         */
        execute: function(command, args, callback){
            var data = {};
            data.command = command;
            data.args = args;
            if (callback){
                var guid = Y.guid();
                this._callbacks[guid] = callback;
                data.callbackId = guid;
            }



            Y.PostMessage.send('execute', data, this.targetWindow, this.targetURL);


        },
        /**
         * Fire the callback with the supplied arguments
         * @param callbackId
         * @param args
         */
        fireCallback: function(callbackId, args){
            this._callbacks[callbackId](args);
        },
        bindExecuteResult: function(){
            //payLoad has callbackId, and data
            var _this = this;
            Y.PostMessage.bind('executeResult', function(payLoad, sender){
                _this.fireCallback(payLoad.callbackId, payLoad.data);
            });
        }
    }

    Y.ParentProxy.init(); //init itself
}, '0.0.1', {requires: ['PostMessage']});