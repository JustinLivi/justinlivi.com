const Mn = require( 'backbone.marionette' );
const hljs = require( 'highlight.js' );

const SourceView = Mn.View.extend({
    className: 'source',
    template: 'script[name="sourceTemplate"]',
    ui: {
        code: 'code',
    },
    onRender: function onRender() {
        this.getUI( 'code' )
        .html( this.options.code[0])
        .each(( i, block ) => {
            hljs.highlightBlock( block );
        });
    },
});

module.exports = SourceView;
