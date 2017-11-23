const article = require('../models/articles.model');
const mongojs = require('mongojs');
const mongoose = require('mongoose');
const config = require('../../config');
const ObjectId = require('mongoose').Types.ObjectId;

mongoose.Promise = global.Promise;


// to save an article
exports.save_article = function (req, res) {

    var newArticle = new article({
        article_title: req.body.title,
        article_content: req.body.content,
        article_by: req.body.userId,
        article_tags: req.body.tags
    });

    newArticle.save(function (err) {
        if (err) {
            console.log('Error Inserting New Data');
            if (err.name === 'ValidationError') {
                for (field in err.errors) {
                    console.log(err.errors[field].message);
                }
            }
            if (err.name === 'MongoError' && err.code === 11000) {
                console.log("mongo error");
                return res.json({ success: false, message: "email already exists" });
            }
        } else {
            res.status(200).json({ success: true, message: 'article saved successfully' });
        }
    });
}

// to read an article by articleId
exports.read_article = function (req, res) {
    article.findOne(
        { _id: req.params.articleId }, function (err, article_doc) {
            if (err) throw err;
            if (!article_doc) {
                res.json({ success: false, message: 'article with id : ' + req.params.articleId + ' could not be found' });
            } else {
                res.status(200).json({
                    success: true,
                    message: 'user login successfull',
                    obj: article_doc
                });
            }

        });
}

// to edit an article by articleId
exports.edit_article = function (req, res) {
    article.findOneAndUpdate(
        { "_id": req.body._id },
        { $set: req.body },
        { returnNewDocument: true },
        function (err, obj) {
            if (err) {
                throw err;
            } else {
                res.status(200).json({ success: true, message: 'article updated', obj: obj });
            }
        });
}

// to delete an article by articleId
exports.delete_article = function (req, res) {
    article.deleteOne({
        _id: req.body._id
    }, function (err) {
        if (err) throw err;
        else {
            res.status(200).json({
                success: true,
                message: 'article deleted successfully'
            });
        }
    });
}


// to get recent top ten posts 
exports.getRecentTopTenArticles = function (req, res) {
    article.find({ 'isActive': true }).limit(10).sort({ _id: -1 }).exec(function (err, articles) {
        console.log(articles);
        res.status(200).json(articles);
    });
};

// to get articles for a particular user
exports.getArticlesByUser = function (req, res) {
    article.find({ 'isActive': true, 'article_by': req.params.userId }).exec(function (err, articles) {
        console.log(articles);
        res.status(200).json(articles);
    });
}

// to get articles for a based on topic
exports.getArticlesByTopic = function (req, res) {
    console.log(req.params.topic)
    article.find({ 'isActive': true, article_tags : req.params.topic }).exec(function (err, articles) {
        console.log(articles);
        res.status(200).json(articles);
    });
}

//to like a article
exports.likeArtilce = function (req, res) {
    article.find({ '_id': req.params.articleId }, function (err, doc) {
        if (err) throw err;
        if (!doc) {
            res.json({ success: false, message: 'Article with id : ' + req.params.articleId + ' could not be found' });
        } else {
            article.findOneAndUpdate(
                { '_id': req.params.articleId },
                {
                    $inc: { "articles_likes.$.likes": 1 },
                    updatedTime: Date.now(),
                    "$push": { "articles_likes.$.likedBy": ObjectId(req.body.userId) }
                },
                { upsert: false, new: true, returnNewDocument: true },
                function (err, doc) {
                    if (err) throw err;
                    return res.status(200).json({ success: true, message: 'Article liked successfully', doc: doc });
                }
            );
        }
    });
};

// to update views for a post
exports.updateViews = function (req, res) {
    article.find({ '_id': req.params.articleId }, function (err, doc) {
        if (err) throw err;
        if (!doc) {
            res.json({ success: false, message: 'Article with id : ' + req.params.articleId + ' could not be found' });
        } else {
            article.findOneAndUpdate(
                { '_id': req.params.articleId },
                { $inc: { "article_views": 1 } },
                { upsert: false, new: true, returnNewDocument: true },
                function (err, doc) {
                    if (err) throw err;
                    return res.status(200).json({ success: true, message: 'article updated successfully' });
                }
            );
        }
    });
};

