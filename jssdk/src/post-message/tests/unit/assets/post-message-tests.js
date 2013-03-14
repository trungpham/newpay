YUI.add('post-message-tests', function(Y) {



    // Tests Below...
    var suite = new Y.Test.Suite("PostMessage");
    suite.add(new Y.Test.Case({
        name : "Bind event",
        setUp : function () {
            Y.PostMessage.init();
        },

        tearDown : function () {
            Y.PostMessage.cleanUp();
        },
        "should fire the callback if the event match" : function() {
            var mock = Y.Mock();


            Y.Mock.expect(mock, {
                method: "callWith",
                args: ["blah", window]
            });

            var _this = this;
            Y.PostMessage.bind('testEvent', function(data, sender){
                mock.callWith(data, sender);
            });

            //trigger it
            var fakeMessage = 'postMessage-'+ Y.JSON.stringify({eventName: 'testEvent',
                data: "blah"
            });

            window.postMessage(fakeMessage, '*');

            //Y.Mock.verify(mock);

            this.wait(function(){
                Y.Mock.verify(mock);
            },0);
        }
    }));


    Y.Test.Runner.add(suite);

});
