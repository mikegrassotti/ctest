import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('comment-form', 'Integration | Component | comment form', {
  integration: false
});

test('external action is triggered when form is submitted', function(assert) {
  // This is important to make sure that the test fails if
  // our assertion is never called
  assert.expect(1);

  // Create our test double
  var targetObject = {
    externalAction: function(attributes) {
      // This assertion will be called when the action is triggered
      assert.deepEqual(attributes, { body: 'You are not a wizard!' });
    }
  };

  // Creates the component
  var component = this.subject({
    // Sets sample data
    body: 'You are not a wizard!',

    // Sets the targetObject to our test double
    // (this is where sendAction will send its action)
    targetObject: targetObject,

    // Specifies which action to send to targetObject on submit
    submit: 'externalAction',
  });

  // Renders the component to the page
  this.render();

  // Submits the form
  this.$().find('input[type="submit"]').click();
});
