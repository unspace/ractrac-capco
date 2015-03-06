import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application;

module('Acceptance: Sightings', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /sightings', function(assert) {
  visit('/sightings');

  andThen(function() {
    assert.equal(currentPath(), 'sightings.index');
  });
});

test('visiting /sightings renders a table of Sightings', function(assert) {
  visit('/sightings');

  andThen(function() {
    assert.ok(find("tr").length > 0, "it has at least one sighting.");
  });
});
