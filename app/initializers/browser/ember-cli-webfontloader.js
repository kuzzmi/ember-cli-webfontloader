import Ember from 'ember';
import ENV from '../../config/environment';
import setupWebFont from 'ember-cli-webfontloader/initializers/browser/ember-cli-webfontloader';
export default {
    name: 'ember-cli-webfontloader',
    initialize() {
        const config = Ember.get(ENV, 'webFontConfig') || {};
        setupWebFont(config);
    }
};
