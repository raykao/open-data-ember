import DS from 'ember-data';

export default DS.Model.extend({
  age: DS.attr('string'),
  gender: DS.attr('string'),
  height: DS.attr('string'),
  eyeColour: DS.attr('string')
});
