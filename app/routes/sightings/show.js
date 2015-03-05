import Ember from 'ember';
import Sighting from 'ractrac-capco/models/sighting';

export default Ember.Route.extend({
  model(params) {
    return Sighting.find(params.sighting_id);
  }
});

