Y[NAME] = {
   _windows: {},
   init: function(){

       /**
        * payLoad has command, args, callbackId
        */
       var _this = this;
       Y.PostMessage.bind('execute', function(payLoad, sender){


           if (payLoad.command == 'register'){

                var guid = Y.guid();
               _this._windows[guid] = {
                   window: sender,
                   frameIndex: 0
               };

               var callbackId = payLoad.callbackId;

               _this.sendBack(sender, callbackId, guid)

           }

       });
   },
    sendBack: function(sender, callbackId, data){
        Y.PostMessage.send('executeResult', {callbackId: callbackId, data: data}, sender);
    }

}