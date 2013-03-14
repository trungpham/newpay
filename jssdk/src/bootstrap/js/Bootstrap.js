Y[NAME] = {

    init: function(){

        //init post message
        Y.PostMessage.init();

        Y.ParentProxy.init();
    }
}

//run this init function right away
setTimeout(function(){
        Y[NAME].init();
}, 0);