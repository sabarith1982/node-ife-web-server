var {Menu} = require('./models/menu');
var {MenuItem} = require('./models/menuitem');
var {Movie} = require('./models/movies');
var {Category} = require('./models/category');
var {Language} = require('./models/language');

module.exports = function(app){
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

  app.post('/Movie',(req, res) => {
    var movie = new Movie({
      mid: req.body.mid,
      posterImageURL: req.body.posterImageURL,
      synopsisImageURL: req.body.synopsisImageURL,
      videoURL: req.body.videoURL,
      title: req.body.title,
      year: req.body.year,
      rating: req.body.rating,
      description: req.body.description,
      audiotracks: req.body.audiotracks,
      closedcaption: req.body.closedcaption,
      subtitles: req.body.subtitles,
      trailormid: req.body.trailormid,
      duration: req.body.duration,
      director: req.body.director,
      cast: req.body.cast,
      userrating: req.body.userrating,
      genres: req.body.genres
    });
    movie.save().then((obj) => {
      res.send(obj)
    },(e) => {
      res.status(400).send(e)
    });
  });

  app.post('/Category',(req, res) => {
    var category = new Category({
      cid: req.body.cid,
      name: req.body.name
    });
    category.save().then((obj) => {
      res.send(obj)
    },(e) => {
      res.status(400).send(e)
    });
  });

  app.post('/Language',(req, res) => {
    var language = new Language({
      textID: req.body.textID,
      text_EN: req.body.textEN,
      text_CH: req.body.textCH
    });
    language.save().then((obj) => {
      res.send(obj)
    },(e) => {
      res.status(400).send(e)
    });
  });

  app.post('/CategoryMediaMap',(req, res) => {
    var categorymediamap = new CategoryMediaMap({
      cid: req.body.cid,
      mid: req.body.mid
    });
    categorymediamap.save().then((obj) => {
      res.send(obj)
    },(e) => {
      res.status(400).send(e)
    });
  });
}
