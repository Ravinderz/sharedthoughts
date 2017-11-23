const express = require('express');
const router = express.Router();

var article = require('../controllers/articles.controller');

router.route('/write').post(article.save_article);
router.route('/read/:articleId').get(article.read_article);
router.route('/edit/:articleId').put(article.edit_article);
router.route('/delete/:articleId').delete(article.delete_article);
router.route('/recent-articles').get(article.getRecentTopTenArticles);
router.route('/articles-by-user/:userId').get(article.getArticlesByUser);
router.route('/topic/:topic').get(article.getArticlesByTopic);
router.route('/like-article/:articleId').post(article.likeArtilce);
router.route('/update-view/:articleId').post(article.updateViews);

module.exports = router;