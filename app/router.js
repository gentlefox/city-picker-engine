import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // this.route('city', { path: '/cities/:city_id' });
  this.mount('city-picker');
});

export default Router;
