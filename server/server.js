var express = require('express');

var app = express();

require('./util/routes.js')(app, express);

module.exports = app;
