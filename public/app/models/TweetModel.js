var Tweet = Backbone.Model.extend({

  url: 'api/twitter/tweets',

  parse: function(model) {
    var date = moment(model.created_at, "ddd MMM DD HH:mm:ss ZZ YYYY").fromNow();

    model.date = date;

    return model;
  }

});
