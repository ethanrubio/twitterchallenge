var Twitter = require('twitter-node-client').Twitter;
var keys = require('../util/config.js');


//Callback functions
var error = function (err, response, body) {
    console.log('ERROR [%s]', err);
};
var success = function (data) {
    console.log('Data [%s]', data);
};

var config = {
    "consumerKey": keys.twitter.consumer_key,
    "consumerSecret": keys.twitter.consumer_secret,
    "accessToken": keys.twitter.token,
    "accessTokenSecret": keys.twitter.token_secret,
    "callBackUrl": "XXX"
}

var twitter = new Twitter(config);

module.exports = {

  getTweets: function (req, res, next) {

    console.log(req.body);

    var twitter_handle = req.body.data;

    twitter.getUserTimeline({ screen_name: twitter_handle, count: '25'}, function(err, response, body){
        if (err) {
          console.log(err);
        }
      }, function(data){
          res.status(200).send(data);
        });

    console.log("i'm in the twitter controller - twitter_handle: ", twitter_handle);
  }

};
