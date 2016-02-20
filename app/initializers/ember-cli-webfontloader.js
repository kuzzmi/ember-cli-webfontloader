// Let's keep our configuration in the main config file
import Ember from 'ember';
import ENV from '../config/environment'; 
import { WebFont } from 'webfontloader';

export function initialize(container, application) {
	// Checking configuration for webFontConfig
    if (!Ember.get(ENV, 'webFontConfig')) {
        return;
    }

    // Extending WebFont
    let events = {
        // current state of WebFontLoader
        state: null,

        // Collection of callback functions to be called
        // when the appropriate event is fired
        eventHandlers: {
            active: [],
            inactive: [],
            loading: [],
        },


        // Real `active` callback
        onActive() { 
            events.state = 'active';
            let funcs = events.eventHandlers.active;

            for (var i = 0, l = funcs.length; i < l; i++) { funcs[i](); }
        },

        // Real `inactive` callback
        onInactive() { 
            events.state = 'inactive';
            let funcs = events.eventHandlers.inactive;

            for (var i = 0, l = funcs.length; i < l; i++) { funcs[i](); }
        },

        // Real `loading` callback
        onLoading() { 
            events.state = 'loading';
            let funcs = events.eventHandlers.loading;

            for (var i = 0, l = funcs.length; i < l; i++) { funcs[i](); }
        }
    };

    WebFont.__events__ = events;

    // Adds a callback to the eventHandlers[event] list and 
    // if "toRun" is true and the current state is event name,
    // we need to run callback function after we add it to the list
    WebFont.on = (event, callback, toRun) => {
        // Adding new handler to the list
        WebFont.__events__.eventHandlers[event].push(callback);

        // Checking if we should run it now
        if (toRun && event === WebFont.__events__.state) {
            callback();
        }
    };

	// Getting all font families that should be loaded from
    // configuration
    let config = Ember.get(ENV, 'webFontConfig') || {};

    config.loading = WebFont.__events__.onLoading;
    config.active = WebFont.__events__.onActive;
    config.inactive = WebFont.__events__.onInactive;
    // config.fontloading = WebFont.__events__.onFontloading;
    // config.fontactive = WebFont.__events__.onFontactive;    
    // config.fontinactive = WebFont.__events__.onFontinactive;

    WebFont.load(config);
}

export default {
    name: 'ember-cli-webfontloader',
    initialize
};
