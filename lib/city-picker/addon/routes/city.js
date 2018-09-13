import Ember from 'ember';

const { Route, get, inject } = Ember;

export default Route.extend({
  cityData: inject.service(),

  model(params) {

    let cities = get(this, 'cityData').cities;

    for (let city of cities) {
      if (city.id === params.id) {
        return city;
      }
    }
  }
});
