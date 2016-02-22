# ember-cli-webfontloader

WebFontLoader wrapped in Ember CLI addon. Allows you to subscribe to events and configure fonts through your Ember environment configuration file.

## Installation

```
ember install ember-cli-webfontloader
```

## Configuration

To load fonts you have to configure your `config/environment.js` file and set font-families as propery of `webFontConfig` object.

For details about the WebFont configuration please refer WebFontLoader official [documentation](https://github.com/typekit/webfontloader/blob/master/README.md)

Examples:

```javascript
// config/environment.js
    ...
    webFontConfig: {
        google: {
            families: ['Roboto Mono']
        },
        timeout: 2000
    }
    ...
```

```javascript
// config/environment.js
    ...
    webFontConfig: {
        typekit: {
            id: 'xxxxxx'
        }
    }
    ...
```

## Usage

To add event handlers you have to import WebFont to your file:

```javascript
import { WebFont } from 'webfontloader';
```

After doing that you can add hanlders by using `WebFont.on()` function, its signature is following:

```
on(string event, function fn, boolean runIfActive)
```

The last argument is used to run the handler if the event is already fired. This is useful, for example, when fonts were loaded before reaching the `on('active', ...)` code.

Currently implemented all 6 events:

* loading
* active
* inactive
* fontloading
* fontactive
* fontinactive

```javascript
WebFont.on('loading', () => {
    // react on "fonts are loading" event
});

WebFont.on('active', () => {
    // react on "fonts are active" event
});

WebFont.on('inactive', () => {
    // react on "fonts are inactive" event
});

WebFont.on('fontloading', (familyName, fvd) => {
    // react on "font familyName is loading" event
});

WebFont.on('fontactive', (familyName, fvd) => {
    // react on "font familyName is active" event
});

WebFont.on('fontinactive', (familyName, fvd) => {
    // react on "font familyName is inactive" event
});
```

For more information on using WebFontLoader, visit [https://github.com/typekit/webfontloader](https://github.com/typekit/webfontloader).

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
