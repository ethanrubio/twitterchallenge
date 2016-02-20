var twitterController = require('./twitterController.js');


module.exports = function (app) {
  // app === twitterRouter injected from request-helper.js

  app.post('/tweets', twitterController.getTweets);

};
