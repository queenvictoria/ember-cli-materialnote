import Ember from 'ember';
import layout from '../templates/components/ember-materialnote';

export default Ember.Component.extend({
  layout,

  toolbar: [],
  height: 500,
  airMode: false,
  airPopover: [],
  options: {},
  body: '',

  didReceiveAttrs() {
    let toolbar = this.get('toolbar');
    let height = this.get('height');
    let airMode = this.get('airMode');
    let airPopover;
    if (airMode) {
      airPopover = this.get('airPopover');
    }

    this.set('options', { toolbar, height, airMode, airPopover });
  },
  didInsertElement() {
    Ember.run.once('afterRender', () => {
      this.$().materialnote(this.get('options'));
      this._updateBody();
    });
  },
  _updateBody() {
    this.$().code(this.get('body'));
  }
});
