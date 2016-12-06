const Mn = require( 'backbone.marionette' );

const StatementView = Mn.View.extend({
    className: 'statement',
    template: 'script[name="statementTemplate"]',
});

module.exports = StatementView;
