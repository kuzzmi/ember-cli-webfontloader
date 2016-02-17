// Let's keep our configuration in the main config file
import Ember from 'ember';
import ENV from '../config/environment'; 
import { WebFont, WebFontConfig } from 'webfontloader';

export function initialize() {
	// Checking configuration for webFontConfig
    if (!Ember.get(ENV, 'webFontConfig')) {
        return;
    }

	// Getting all font families that should be loaded from
    // configuration
    let config = Ember.get(ENV, 'webFontConfig');

	// If there are families, we need to load them
    if (Object.keys(config).length) {
        config.loading = WebFontConfig.loading;
        config.active = WebFontConfig.active;
        config.inactive = WebFontConfig.inactive;
        config.fontloading = WebFontConfig.fontloading;
        config.fontactive = WebFontConfig.fontactive;
        config.fontinactive = WebFontConfig.fontinactive;
        WebFont.load(config);
    }
}

export default {
    name: 'ember-cli-webfontloader',
    initialize
};
