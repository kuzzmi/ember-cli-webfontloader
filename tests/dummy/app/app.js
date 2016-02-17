import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';
import { WebFontConfig } from 'webfontloader';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

WebFontConfig.loading = () => {
    console.log('WebFontConfig loading here');
}

loadInitializers(App, config.modulePrefix);

WebFontConfig.active = () => {
    console.log('WebFontConfig loaded here');
}

export default App;
