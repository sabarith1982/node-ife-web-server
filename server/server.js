var {mongoose} = require('./db/mongoose');

var express = require('express');
var bodyParser = require('body-parser');


var {Menu} = require('./models/menu');
var {MenuItem} = require('./models/menuitem');

const port = process.env.PORT || 3000;
var app = new express();

app.use(bodyParser.json());

require('./get') (app);

require('./post') (app);

app.listen(port, ()=> {
  console.log("App started")
});

module.exports = {app};
