/* jshint node: true */
'use strict';

var filterInitializers = require('fastboot-filter-initializers');

module.exports = {
    name: 'ember-cli-webfontloader',
    
    preconcatTree: function(tree) {
        return filterInitializers(tree, this.app.name);
    },

    included: function(app) {
        this._super.included(app);

        if (!process.env.EMBER_CLI_FASTBOOT) {
          this.app.import('vendor/webfontloader.js', {
              type: 'vendor'
          });
          this.app.import('vendor/webfontloader.shim.js', {
              type: 'vendor',
              exports: { 'webfontloader': ['WebFont'] }
          });
        }
    }
};
