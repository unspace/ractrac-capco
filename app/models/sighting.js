import Ember from 'ember';

var Sighting = Ember.Object.extend({
  bmi: Ember.computed('weight', 'height', function() {
    var heightM = this.get('height') / 100.0;
    return this.get('weight') / (heightM * heightM);
  }),

  save() {
    var data = this.getProperties('location','description','height','weight');
    return Ember.$.ajax('/api/sightings/',{
      type: 'POST',
      data: data
    });
  }
});

Sighting.reopenClass({
  findAll() {
    return Ember.$.ajax('/api/sightings').then((result) => {
      return result.sightings.map((s) => {
        return Sighting.create(s);
      });
    });
  },

  find(id) {
    return Ember.$.ajax('/api/sightings/' + id).then((s) => {
      return Sighting.create(s);
    });
  }
});

export default Sighting;
