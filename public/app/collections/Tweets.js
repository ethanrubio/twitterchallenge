var Tweets = Backbone.Collection.extend({

  model: Tweet,

  url: 'api/twitter/tweets',

  initialize: function(){

  }

});
