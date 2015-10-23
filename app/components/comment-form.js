import Ember from 'ember';

export default Ember.Component.extend({
  body: null,

  actions: {
    submit: function() {
      var body = this.get('body');

      this.sendAction('submit', { body: body });
    }
  }
});