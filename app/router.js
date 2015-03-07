import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType,

  pageView: function() {
    this.get('analytics').logPageView(this.get('url'));
  }.on('didTransition')
});

Router.map(function() {
  this.route('overview');
  this.resource('sightings', function() {
    this.route('show', {path: '/:sighting_id'});
    this.route('new');
  });
});

export default Router;
