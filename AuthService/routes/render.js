var express = require('express');
var router = express.Router();

/* GET 회원 가입 페이지 */
router.get('/join.html', function(req, res, next) {
  res.render('join', { title: 'Express' });
});

/* GET 로그인 페이지 */
router.get('/login.html', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

/* GET 마이 페이지 */
router.get('/mypage.html', function(req, res, next) {
  res.render('mypage', { title: 'Express' });
});

module.exports = router;
