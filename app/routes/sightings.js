import Ember from 'ember';
import Sighting from 'ractrac-capco/models/sighting';

export default Ember.Route.extend({
  model() {
    return Sighting.findAll();
  }
});
