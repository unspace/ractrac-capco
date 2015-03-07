import Ember from 'ember';

export default Ember.Object.extend({
  logPageView(path) {
    console.log(path);
  }
});
