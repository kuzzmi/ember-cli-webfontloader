import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';
import WebFont from 'webfontloader';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

window.WebFontConfig = {
    active: function() {
        console.log('Aaaaaa');
    },
    loading: function() {
        alert('aaaa')
    }
};

loadInitializers(App, config.modulePrefix);

export default App;
