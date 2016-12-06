const Mn = require( 'backbone.marionette' );
const $ = require( 'jquery' );
const Promise = require( 'bluebird' );
const Backbone = require( 'backbone' );

const AppModel = require( '../../models/app' );

const HeaderView = require( './header' );
const RenderView = require( './render' );
const StatementView = require( './statement' );
const SourceView = require( './source' );

const AppView = Mn.View.extend({
    id: 'app',
    template: 'script[name="appTemplate"]',
    regions: {
        header: '#header',
        body: '#body',
    },
    childViewEvents: {
        'select:previous': 'navigateToPrevious',
        'select:next': 'navigateToNext',
    },
    navigateToPrevious: function navigateToPrevious() {
        Backbone.history.navigate( `app/${this.options.previous.data.uri}/render`, { trigger: true });
    },
    navigateToNext: function navigateToNext() {
        Backbone.history.navigate( `app/${this.options.next.data.uri}/render`, { trigger: true });
    },
    showRender: function showRender() {
        const model = new AppModel( this.options.selected.data );
        this.showChildView( 'header', new HeaderView({ model }));
        this.showChildView( 'body', new RenderView({
            model,
            render: this.options.selected.render,
        }));
    },
    showStatement: function showStatement() {
        const model = new AppModel( this.options.selected.data );
        this.showChildView( 'header', new HeaderView({ model }));
        return this.showChildView( 'body', new StatementView({ model }));
    },
    showSource: function showSource() {
        const model = new AppModel( this.options.selected.data );
        const source = model.attributes.source;
        this.showChildView( 'header', new HeaderView({ model }));
        return Promise.all( source.embed.map( embed => $.get( `https://raw.githubusercontent.com/${source.owner}/${source.repo}/${source.ref}/${embed.path}` )))
        .then(( code ) => {
            this.showChildView( 'body', new SourceView({ model, code }));
        });
    },
});

module.exports = AppView;
