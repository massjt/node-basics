var express = require('express');
var router = express.Router();
var db = require('monk')('localhost:27017/test');
var userData = db.get('users');

router.get('/mongo',function(req,res,next){
  res.render('mongo', { title: 'MongoDb exercise'});
});
router.get('/get-data',function(req,res,next){
  var resultArr = [];
  var data = userData.find({}).then((docs) => {
    res.render('mongo', {items: docs});
  });

});
router.post('/insert',function(req,res,next){
  var item = {
    title: req.body.title,
    content: req.body.content,
    author: req.body.author
  };
  userData.insert(item);
  res.redirect('mongo');
});
router.post('/update',function(req,res,next){
  var item = {
    title: req.body.title,
    content: req.body.content,
    author: req.body.author
  }
  var id = req.body.id;
  userData.update({"_id": db.id(id)}, item);
});

router.post('/delete',function(req,res,next){
  var id = req.body.id;
  userData.remove({'_id': db.id(id)});
});

module.exports = router;
