/*jshint node:true*/
const EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: 'city-picker',
  lazyLoading: false,

  isDevelopingAddon: function() {
    return true;
  }
});
