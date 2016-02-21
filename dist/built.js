$(function(){

  var searchView = new SearchView();

  // thank you to internet for this function to clear regex url
  Handlebars.registerHelper('format', function (string) {

    if (string) {

      string = string.replace(/[@]+[A-Za-z0-9-_]+/g, function(user) {
           var username = user.replace("@","");
           return user.link("https://twitter.com/"+username);
      });

     return new Handlebars.SafeString(string);

    } else {

      return string;

    }

  });

});

var Tweets = Backbone.Collection.extend({

  model: Tweet,

  url: 'api/twitter/tweets',

  initialize: function(){

  }

});

var Tweet = Backbone.Model.extend({

  url: 'api/twitter/tweets',

  parse: function(model) {
    var date = moment(model.created_at, "ddd MMM DD HH:mm:ss ZZ YYYY").fromNow();

    model.date = date;

    return model;
  }

});

var ProfileView = Backbone.View.extend({

  el: '#profile',

  template: Handlebars.compile($("#profile-template").html()),

  model: null,

  initialize: function(model) {
    this.model = model;
    console.log(this.model);
    this.render();
    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    console.log(this.model.toJSON());
    var output = this.template({user: this.model.toJSON()});
    this.$el.html(output);
    return this;
  }

});

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
        console.log(collection);
        var profileView = new ProfileView(collection.models[0]);
        var tweetListView = new TweetListView(collection);
        }
      });
  }

});

var TweetListView = Backbone.View.extend({
  el: '#tweetlist',

  template: Handlebars.compile($("#tweetlist-template").html()),

  tweetlist: null,

  initialize:  function(collection){
    this.tweetlist = collection;
    console.log(this.tweetlist.models);
    this.render();
    this.listenTo(this.tweetlist, 'reset', this.render);
  },

  render: function(){
    this.$el.empty();
    this.unbind();

    if (this.tweetlist.models.length > 0) {
      console.log('i\'m being rendered! ', this.tweetlist.toJSON());
      var output = this.template({tweet: this.tweetlist.toJSON()});
      this.$el.append(output);
    }

    return this;
  }

});
