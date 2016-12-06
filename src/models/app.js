const Backbone = require( 'backbone' );

module.exports = Backbone.Model.extend({
    defaults: {
        title: '',
        year: '',
        source: '',
        uri: '',
        statement: '',
    },
});
