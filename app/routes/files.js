import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('file', '/');
  },

  renderTemplate: function() {
    this.render('file');
  }
});