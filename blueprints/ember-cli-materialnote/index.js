/*jshint node:true*/
module.exports = {
  description: '',

  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addBowerPackageToProject('materialNote');
  },

  beforeInstall: function() {
    return this.addAddonsToProject({
      packages: [
        { name: 'ember-cli-materialize', target: '0.19.5' }
      ]
    });
  }
};
