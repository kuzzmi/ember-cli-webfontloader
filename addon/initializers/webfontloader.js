/* globals WebFont */
import Ember from 'ember';
import Env from '../config/environment';

export function initialize() {
    if (!Ember.get(Env, 'webFontLoader')) {
        return;
    }

    let families = Ember.get(Env, 'webFontLoader');

    if (Ember.keys(families).length) {
        WebFont.load(families);
    }
}

export default {
    name: 'webfontloader',
    initialize
};
