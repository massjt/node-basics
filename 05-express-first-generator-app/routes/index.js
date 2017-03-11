var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', condition: true, anyArray: [1,2,3]});
});
router.get('/test/:id', function(req, res, next) {
  res.render('test', {output: req.params.id});
});

router.get('/form', function(req, res, next) {
  res.render('form', { title: 'form Express'});
})

router.post('/test/submit', function(req, res, next) {
  var id = req.body.id;
  res.redirect('/test/'+id);
});
// session study
router.get('/sess', function(req, res, next) {
  res.render('sess', {title: 'Form Validation', success: req.session.success,  errors: req.session.errors});
  req.session.errors = null;
  req.session.success = null;
});
router.post('/sub', function(req,res,next){
  req.check('email','Invalid email address').isEmail();
  req.check('password', 'Password is Invalid').isLength({min: 4}).equals(req.body.confirmPassword);

  req.getValidationResult().then(function(result){
    if (result.isEmpty()) {
      req.session.success = true
    } else {
      req.session.errors = result.array();
      req.session.success = false
    }
    res.redirect('/sess')
  });

  // var errors = req.validationErrors();
  // if (errors) {
  //   req.session.errors = errors;
  //   req.session.success = false;
  // } else {
  //   req.session.success = true;
  // }
  // res.redirect('/sess');
});


module.exports = router;
