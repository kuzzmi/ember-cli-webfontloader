# ember-cli-webfontloader

WebFontLoader wrapper for Ember CLI.

Nice README is coming soon.

## Installation

```
ember install ember-cli-webfontloader
```

## Configuration

```javascript
// config/environment.js
    ...
    webFontConfig: {
        google: {
            families: ['Roboto Mono']
        }
    }
    ...
```

## Usage

In order to subscribe to events you need to do following:

```javascript
import { WebFont } from 'webfontloader';
    ...
    WebFont.on('active', () => {
        // react on "fonts are active" event
    });
    WebFont.on('inactive', () => {
        // react on "fonts are inactive" event
    });
    WebFont.on('loading', () => {
        // react on "fonts are loading" event
    });
    ...
```

If you don't know if the fonts are already in some state, but you want to execute function anyway if the event has been already fired, you just need to pass `true` as the last parameter to the `on()` function.

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
