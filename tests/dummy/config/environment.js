/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'dummy',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }, 

    contentSecurityPolicy: {
        'script-src': "'self' 'unsafe-inline' kuzzmi.disqus.com referrer.disqus.com www.google-analytics.com",
        'style-src': "'self' 'unsafe-inline' use.typekit.net fonts.googleapis.com a.disquscdn.com",
        'child-src': "'self' 'unsafe-inline' disqus.com",
        'font-src': "'self' 'unsafe-inline' fonts.gstatic.com",
        'img-src': "'self' 'unsafe-inline' www.gravatar.com a.disquscdn.com referrer.disqus.com",
        'connect-src': "'self' http://localhost:3000"
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
