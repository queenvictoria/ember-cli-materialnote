/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-materialnote',
  included: function(app) {
    this._super.included(app);

    app.import('bower_components/materialNote/js/ckMaterializeOverrides.js');
    app.import('bower_components/materialNote/js/materialNote.min.js');
    app.import('bower_components/materialNote/css/materialNote.css');
  }
};
