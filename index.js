/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-materialnote',
  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/materialNote/js/ckMaterializeOverrides.js');
    app.import(app.bowerDirectory + '/materialNote/js/materialNote.min.js');
    app.import(app.bowerDirectory + '/materialNote/css/materialNote.css');
  }
};
