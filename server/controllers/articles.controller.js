const user = require('../models/article');
const mongojs = require('mongojs');
const mongoose = require('mongoose');
const config = require('../../config');

exports.save_article = function (req, res) {

    var newArticle = new article({

        article_title: req.body.title,
        article_content: req.body.content,
        article_by: req.body.userId,
        article_tag: req.body.tag

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
                return res.json({
                    success: false,
                    message: "email already exists"
                });
            }
        } else {
            res.status(200).json({
                success: true,
                message: 'article saved successfully'
            });
        }
    });
}

exports.read_article = function (req, res) {

    article.findOne({ _id: req.params.articleId }, function (err, article_doc) {
        if (err)
            throw err;

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



exports.edit_article = function (req, res) {

    article.findOneAndUpdate({ "_id": req.body._id },
        { $set: req.body },
        {
            returnNewDocument:
            true
        },
        function (err, obj) {
            if (err) {
                throw err;
            } else {
                res.json({ success: true, message: 'article updated', obj: obj });
            }
        });
}



exports.delete_article = function (req, res) {
    article.deleteOne({
        _id: req.body._id
    }, function (err) {
        if (err)
            throw err;
        else {
            res.json({
                success: true,
                message: 'article deleted successfully'
            });
        }
    });
}
