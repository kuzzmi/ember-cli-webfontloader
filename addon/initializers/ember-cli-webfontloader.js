// Let's keep our configuration in the main config file
import { WebFont } from 'webfontloader';

export default function setupWebFont(config) {
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
            fontactive: [],
            fontinactive: [],
            fontloading: []
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
        },

        // Real `fontactive` callback
        onFontactive(familyName, fvd) {
            // we do not need to set the state here as well as let
            // the function to be called immediately
            let funcs = events.eventHandlers.fontactive;

            for (var i = 0, l = funcs.length; i < l; i++) { funcs[i](familyName, fvd); }
        },

        // Real `fontinactive` callback
        onFontinactive(familyName, fvd) {
            // we do not need to set the state here as well as let
            // the function to be called immediately
            let funcs = events.eventHandlers.fontinactive;

            for (var i = 0, l = funcs.length; i < l; i++) { funcs[i](familyName, fvd); }
        },

        // Real `fontloading` callback
        onFontloading(familyName, fvd) {
            // we do not need to set the state here as well as let
            // the function to be called immediately
            let funcs = events.eventHandlers.fontloading;

            for (var i = 0, l = funcs.length; i < l; i++) { funcs[i](familyName, fvd); }
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

    // Setting up our functions
    config.loading      = events.onLoading;
    config.active       = events.onActive;
    config.inactive     = events.onInactive;
    config.fontloading  = events.onFontloading;
    config.fontactive   = events.onFontactive;
    config.fontinactive = events.onFontinactive;

    WebFont.load(config);
}
