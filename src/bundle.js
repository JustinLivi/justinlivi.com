/* eslint-env browser */

require( 'highlight.js/styles/github.css' );
require( './index.less' );

const Backbone = require( 'backbone' );
const Mn = require( 'backbone.marionette' );
const $ = require( 'jquery' );
const dancingsine = require( 'justinlivi-dancing-sine' );
const community = require( 'justinlivi-community' );
const _ = require( 'lodash' );

const AppView = require( './views/app/index' );
const AboutView = require( './views/about' );

const apps = [
    dancingsine,
    community,
];

const Router = Mn.AppRouter.extend({
    appRoutes: {
        about: 'showAbout',
        'app/:app/:method': 'showApp',
    },
});

const App = Mn.Application.extend({
    region: 'div[name="root"]',
    showApp: function showApp( appName, method ) {
        let previous;
        let next;
        const selected = _.find( apps, ( app, index ) => {
            if ( app.data.uri === appName ) {
                previous = index === 0 ? apps[apps.length - 1] : apps[index - 1];
                next = index === apps.length - 1 ? apps[0] : apps[index + 1];
                return true;
            }
            return false;
        });
        if ( !selected ) {
            Backbone.history.navigate( 'app/dancingsine/render', { trigger: true });
        }
        else {
            const appView = new AppView({
                previous,
                selected,
                next,
            });
            this.showView( appView );
            appView[`show${method.charAt( 0 ).toUpperCase() + method.slice( 1 )}`]();
        }
    },
    showAbout: function showAbout() {
        const aboutView = new AboutView();
        this.showView( aboutView );
    },
    onStart: function onStart() {
        if ( !Backbone.history.start()) {
            Backbone.history.navigate( 'app/dancingsine/render', { trigger: true });
        }
    },
});

$( document ).ready(() => {
    const app = new App();
    new Router({ controller: app }); // eslint-disable-line no-new
    app.start();
});
