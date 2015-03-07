import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('sighting', {
  // Specify the other units that are required for this test.

});

test('it exists', function(assert) {
  var model = this.subject();
  assert.ok(!!model);
});

test("calculates BMI properly", function(assert) {
  var sighting = this.subject({height: 25, weight: 4});
  assert.equal(sighting.get('bmi'), 64, "it calculates BMI correctly");
});
