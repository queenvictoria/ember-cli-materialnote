import Ember from 'ember';
import layout from '../templates/components/ember-materialnote';

export default Ember.Component.extend({
  layout,

  height: 500,
  airMode: false,
  followingToolbar: true,
  options: {},
  body: '',

  didReceiveAttrs() {
    let toolbar = this.get('toolbar');
    let height = this.get('height');
    let airMode = this.get('airMode');
    let defaultBackColor = this.get('defaultBackColor');
    let followingToolbar = this.get('followingToolbar');
    let defaultTextColor = this.get('defaultTextColor');
    let airPopover;
    if (airMode) {
      airPopover = this.get('airPopover');
    }

    this.set('options', { toolbar, height, airMode, airPopover, defaultBackColor, followingToolbar, defaultTextColor });
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
