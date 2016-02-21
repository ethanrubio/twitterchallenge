var ProfileView = Backbone.View.extend({

  el: '#profile',

  template: Handlebars.compile($("#profile-template").html()),

  model: null,

  initialize: function(model) {
    //create a collection for this view to render
    this.model = model;
    //force the fetch to fire a reset event
    console.log(this.model)
    this.render();
    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    console.log(this.model.toJSON())
    var output = this.template({user: this.model.toJSON()});
    this.$el.html(output);
    return this;
  }

});
