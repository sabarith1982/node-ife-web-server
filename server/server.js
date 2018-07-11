var {mongoose} = require('./db/mongoose');

var express = require('express');
var bodyParser = require('body-parser');


var {Menu} = require('./models/menu');
var {MenuItem} = require('./models/menuitem');

var app = new express();

app.use(bodyParser.json());

app.get('/Menu',(req, res) => {
    Menu.aggregate([
      {
        $lookup:
        {
          from: "menuitems",
          localField: "menuID",
          foreignField: "menuID",
          as: "menuitems"
        }
      }
    ]).project({_id: 0, __v: 0}).then((menu) => {
      res.send({
        "code":"200",
        "message":"success",
        "data": menu})
      },(e) => {
        res.status(400).send(e);
    });
});

app.post('/Menu',(req, res) => {
  var lvtype = req.body.type ? req.body.type : null
  var lvtargetURL = req.body.targetURL ? req.body.targetURL : null
  var menu = new Menu({
    menuID: req.body.menuID,
    text: req.body.text,
    iconURL: req.body.iconURL,
    type: lvtype,
    targetURL: lvtargetURL
  });
  menu.save().then((obj) => {
    res.send(obj)
  },(e) => {
    res.status(400).send(e)
  });
});

app.post('/MenuItem',(req, res) => {
  var lvtype = req.body.type ? req.body.type : null
  var lvtargetURL = req.body.targetURL ? req.body.targetURL : null
  var menuItem = new MenuItem({
    menuitemID: req.body.menuitemID,
    menuID: req.body.menuID,
    text: req.body.text,
    iconURL: req.body.iconURL,
    type: lvtype,
    targetURL: lvtargetURL
  });
  menuItem.save().then((obj) => {
    res.send(obj)
  },(e) => {
    res.status(400).send(e)
  });
});

app.listen(3000, ()=> {
  console.log("App started")
});

module.exports = {app};
