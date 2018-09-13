import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['city-picker'],

  actions: {
    selectCity(cityId) {
      this.sendAction('onCitySelected', cityId);
    }
  }
});
