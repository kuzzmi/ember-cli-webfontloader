/* global WebFont */
(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': self['webfontloader'],
      __esModule: true,
      'WebFont': self.WebFont
    };
  }

  define('webfontloader', [], vendorModule);
})();
