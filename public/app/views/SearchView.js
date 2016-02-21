var SearchView = Backbone.View.extend({
  el: '#search',

  model: null,

  events: {
   'click #submitsearch': 'submit'
  },

  initialize:  function(){

  },

  submit: function(e){
    query = $('#searchForUser').val();

    e.preventDefault();

    console.log('Search for' +  query);

    var tweets = new Tweets();

    tweets.fetch({
      data: {data: query},
      type:'POST',
      success: function(collection, response, options) {
        console.log(collection)
        var profileView = new ProfileView(collection.models[0]);
        var tweetListView = new TweetListView(collection);
        /*console.log(response);
        console.log(options);*/
        }
      });
  }

});
