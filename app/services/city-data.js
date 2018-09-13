import Ember from 'ember';

const {
  Service,
  inject,
  // get,
  set
} = Ember;

export default Service.extend({
  store: inject.service(),
  cities: null,


  // Example of an alternate means of direct-loading data:

  init() {
    this._super(...arguments);

    const cities = [
      {
        id: 'mel',
        name: 'Melbourne',
        state: 'Victoria',
        thumbnailUrl: '/images/mel.jpg'
      }, {
        id: 'syd',
        name: 'Sydney',
        state: 'New South Wales',
        thumbnailUrl: '/images/syd.jpg'
      }, {
        id: 'goldcoast',
        name: 'Gold Coast',
        state: 'Queensland',
        thumbnailUrl: '/images/goldcoast.jpg'
      }
    ];

    set(this, 'cities', cities);
  }
  // ,

/*
  getCityData() {
    //
    // return get(this, 'store').findAll('city');


    // If using "load once" method of data.

    get(this, 'store').findAll('city')
      .then(cities => {
        assert('City Data retrieved', cities);
        set(this, 'cities', cities);
      });

    return get(this, 'cities');
  }
  */
});
