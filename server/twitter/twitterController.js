var Twitter = require('twitter');
var keys = require('../util/config.js');

var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: keys.twitter.consumer_key,
  consumer_secret: keys.twitter.consumer_secret,
  access_token_key: keys.twitter.token,
  access_token_secret: keys.twitter.token_secret
});


module.exports = {

  getTweets: function (req, res, next) {
    var twitter_handle = req.body.handle;

    var params = {screen_name: 'nodejs'};
    client.get('statuses/user_timeline', params, function(error, tweets, response){
      if (!error) {
        console.log(tweets);
      }
    });

    console.log("i'm in the twitter controller - twitter_handle: ", twitter_handle);
  }

};
