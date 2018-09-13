import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import computed from 'ember-computed';

export default Model.extend({
  name         : attr('string'),
  state        : attr('string'),
  thumbnailUrl : attr('string'),

  label        : computed('name', 'state', function() {
    return `${this.get('name')} - ${this.get('state')}`;
  })
});
