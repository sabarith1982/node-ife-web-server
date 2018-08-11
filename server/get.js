var {Menu} = require('./models/menu');
var {MenuItem} = require('./models/menuitem');
var {Language} = require('./models/language');
var express = require('express');
var path = require('path');
module.exports = function(app){
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

app.get('/Language', (req, res) => {
    var result={};
    Language.find().then((language) => {
      language.map((langObj) => {
        result[langObj.textID] = langObj.text_EN;
      })
      res.send({
        "code":"200",
        "message":"success",
        "data": result
      })
      },(e) => {
        res.status(400).send(e);
      });
    });


//Serve static files
app.use(express.static('public'));

app.get('/dashboard', function(req, res) {
  res.sendFile(path.join(path.resolve(__dirname, "..") + '/public/dashboard.html'));
});

//Route the rest of the APIs
app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname + '/public/index.html'));
});

}
