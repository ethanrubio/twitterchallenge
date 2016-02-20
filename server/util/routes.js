var helpers = require('./helpers.js');
var app = require('../server.js');
var morgan = require('morgan');
var bodyParser  = require('body-parser');

module.exports = function(app, express) {
  var twitterRouter = express.Router();

  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(express.static('./public'));

  app.use('/api/twitter', twitterRouter);

  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);

  // inject our routers into their respective route files
  require('../twitter/twitterRoute.js')(twitterRouter);

};
