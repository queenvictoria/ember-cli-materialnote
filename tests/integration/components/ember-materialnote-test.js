import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-materialnote', 'Integration | Component | ember materialnote', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{ember-materialnote}}`);

  assert.equal(this.$('.note-editable').length, 1);
});

test('it renders with default options', function(assert) {
  assert.expect(1);

  this.render(hbs`{{ember-materialnote}}`);

  assert.equal(this.$('.note-editable').css('height'), '500px');
});

test('it can initialize as an air mode editor', function(assert) {
  assert.expect(1);

  this.set('airMode', true);
  this.set('airPopover', [
    ['color', ['color']],
    ['font', ['bold', 'underline', 'clear']],
    ['para', ['ul', 'paragraph']],
    ['table', ['table']],
    ['insert', ['link', 'picture']]
  ]);

  this.render(hbs`{{ember-materialnote airMode=airMode airPopover=airPopover}}`);

  assert.equal(this.$('.note-air-editor').length, 1);
});

test('it sets the body text', function(assert) {
  assert.expect(1);

  this.set('body', 'this is a test');
  this.render(hbs`{{ember-materialnote body=body}}`);

  assert.equal(this.$('.note-editable').text(), 'this is a test');
});
