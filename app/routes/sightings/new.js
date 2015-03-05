import Ember from 'ember';
import Sighting from 'ractrac-capco/models/sighting';

export default Ember.Route.extend({
  model: function() {
    return Sighting.create();
  },

  actions: {
    save: function(model) {
      model.save().then(() => {
        this.transitionTo('sightings.show', model);
      }, (error) => {
        console.log(error);
      });
    }
  }

});
