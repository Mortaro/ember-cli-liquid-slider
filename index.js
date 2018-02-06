/* eslint-env node */
'use strict';

module.exports = {

  name: 'liquid-slider',

  included: function(app) {
    this._super.included.apply(this, arguments);
    this.import('vendor/liquid-slider.css');
  },

  isDevelopingAddon() {
    return true;
  }

};
