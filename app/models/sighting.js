import Ember from 'ember';
import DS from 'ember-data';

var Sighting = DS.Model.extend({
  seenAt: DS.attr('date'),
  location: DS.attr('string'),
  description: DS.attr('string'),
  height: DS.attr('number'),
  weight: DS.attr('number'),

  bmi: Ember.computed('weight', 'height', function() {
    var heightM = this.get('height') / 100.0;
    return this.get('weight') / (heightM * heightM);
  }),
});

export default Sighting;
