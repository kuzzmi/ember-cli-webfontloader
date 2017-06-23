/* jshint node: true */
'use strict';

var Funnel = require('broccoli-funnel'),
    MergeTrees = require('broccoli-merge-trees'),
    path = require('path');

module.exports = {
    name: 'ember-cli-webfontloader',

    treeForVendor(vendorTree) {
        var webfontloaderTree = new Funnel(path.join(this.project.root, 'node_modules', 'webfontloader'), {
          files: ['webfontloader.js']
        });

        return new MergeTrees([vendorTree, webfontloaderTree]);
    },

    included() {
        this._super.included.apply(this, arguments);
        this._ensureThisImport();

        if (!process.env.EMBER_CLI_FASTBOOT) {
          this.import('vendor/webfontloader.js', {
              type: 'vendor'
          });
          this.import('vendor/webfontloader.shim.js', {
              type: 'vendor',
              exports: { 'webfontloader': ['WebFont'] }
          });
        }
    },

    // ember 2.7 < compatibility:
    // https://github.com/simplabs/ember-simple-auth/blob/1ca4ae678b7be9905076762220dcd9fcb0f27ac0/index.js#L24-L39
    _ensureThisImport: function() {
      if (!this.import) {
        this._findHost = function findHostShim() {
          var current = this;
          var app;
          do {
            app = current.app || app;
          } while (current.parent.parent && (current = current.parent));
          return app;
        };
        this.import = function importShim(asset, options) {
          var app = this._findHost();
          app.import(asset, options);
        };
      }
    }
};
