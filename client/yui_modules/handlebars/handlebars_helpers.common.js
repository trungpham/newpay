YUI.add('handlebars-helpers', function(Y){
    Y.namespace('mojito.handlebars-getter').registerHelper('paymentProfileText', function() {
        var text;
        switch(this.type){
            case "CreditCard":
                text = this.cardBrand + ' ending with ' + this.last4;
                break;
            case "PayPal":
                text = Y.Escape.html(this.maskedEmail);
                break;
        }
        return text;
    });
}, '0.0.1', {requires: ['handlebars-getter']});