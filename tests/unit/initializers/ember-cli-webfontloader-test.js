import Ember from 'ember';
import setupWebFont from 'ember-cli-webfontloader/initializers/ember-cli-webfontloader';
import { module, test } from 'qunit';
import destroyApp from '../../helpers/destroy-app';

module('Unit | Initializer | ember cli webfontloader', {
  beforeEach() {
    Ember.run(() => {
      this.application = Ember.Application.create();
      this.application.deferReadiness();
    });
  },
  afterEach() {
    destroyApp(this.application);
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  setupWebFont({});

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
