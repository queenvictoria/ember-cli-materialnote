/*jshint node:true*/
module.exports = {
  description: '',

  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addBowerPackageToProject('materialNote');
    return this.addBowerPackageToProject('materialize');
  },

  beforeInstall: function() {
    return this.addAddonsToProject({
      packages: [
        { name: 'ember-materialize-shim', target: '0.1.6' }
      ]
    });
  }
};
