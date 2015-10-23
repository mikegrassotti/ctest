import Ember from 'ember';

export default Ember.Component.extend({
  comment: '',

  actions: {
    submitComment() {
      this.sendAction('submitComment', { comment: this.get('comment') });
    }
  }
});