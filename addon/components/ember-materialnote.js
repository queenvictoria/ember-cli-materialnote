import Ember from 'ember';
import layout from '../templates/components/ember-materialnote';

export default Ember.Component.extend({
  layout,

  height: 500,
  minHeight: 100,
  airMode: false,
  options: {},
  body: '',

  didReceiveAttrs() {
    let toolbar = this.get('toolbar');
    let height = this.get('height');
    let minHeight = this.get('minHeight');
    let airMode = this.get('airMode');
    let airPopover;
    if (airMode) {
      airPopover = this.get('airPopover');
    }

    this.set('options', { toolbar, minHeight, height, airMode, airPopover });
  },
  didInsertElement() {
    Ember.run.once('afterRender', () => {
      this.$('.mn-container').materialnote(this.get('options'));
      this._setBody();
    });
  },

  click() {
    this._updateBody();
  },
  keyUp() {
    this._updateBody();
  },

  _setBody() {
    this.$('.mn-container').code(this.get('body'));
  },
  _updateBody() {
    let body = this.$('.note-editable').html();
    this.set('body', body);
  }
});
