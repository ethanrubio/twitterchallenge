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
