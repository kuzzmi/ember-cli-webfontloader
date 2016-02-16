// Let's keep our configuration in the main config file
import Ember from 'ember';
import ENV from '../config/environment'; 
import WebFont from 'webfontloader';

export function initialize() {
	// Checking configuration for WebFontLoader options
    if (!Ember.get(ENV, 'webFontLoader')) {
        return;
    }

	// Getting all font families that should be loaded from
    // configuration
    let families = Ember.get(ENV, 'webFontLoader');

	// If there are families, we need to load them
    if (Object.keys(families).length) {
        WebFont.load(families);
    }
}

export default {
    name: 'ember-cli-webfontloader',
    initialize
};
