const Mn = require( 'backbone.marionette' );

const HeaderView = Mn.View.extend({
    template: 'script[name="headerTemplate"]',
    className: 'header',
    triggers: {
        'click .previous': 'select:previous',
        'click .next': 'select:next',
    },
});

module.exports = HeaderView;
