const Mn = require( 'backbone.marionette' );

const RenderView = Mn.View.extend({
    template: 'script[name="renderTemplate"]',
    className: 'work',
    ui: {
        canvas: 'canvas',
    },
    onRender: function onRender() {
        this.controls = this.options.render( this.getUI( 'canvas' ).get( 0 ));
    },
    onDetach: function onDetach() {
        this.controls.stop();
    },
});

module.exports = RenderView;
