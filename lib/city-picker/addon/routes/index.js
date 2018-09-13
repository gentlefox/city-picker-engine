import Ember from 'ember';
import DS from 'ember-data';
import get from 'ember-metal/get'

const { Route, inject, get } = Ember;

export default Route.extend({
  cityData: inject.service(),

  model() {
    // debug('store service is an instanceof DS.Store', get(this, 'store') instanceof DS.Store);

    return get(this, 'cityData').cities;
  },

  actions: {
    onCitySelected(cityId) {
      this.transitionTo('city', cityId);
    }
  }
});
