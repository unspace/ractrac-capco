import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('sighting');
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
