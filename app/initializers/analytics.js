import Ember from 'ember';

var Analytics = Ember.Object.extend({
  logPageView(path) {
    console.log(path);
  }
});

export default {
  name: 'analytics',

  initialize(container, application) {
    application.register('analytics:main', Analytics, { instantiate: true });
    application.inject('router', 'analytics', 'analytics:main');
  }
};
