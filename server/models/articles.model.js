var mongoose = require("mongoose");
var Schema = mongoose.Schema;



var article = mongoose.model('article', new Schema({

    'article_id': String,
    'article_title': String,
    'article_date': { type: Date, default: Date.now },
    'article_content': String,
    'article_by': { type: Schema.Types.ObjectId, ref: 'user.model' },
    'article_likes': [{
        'likes': { type: Number, default: 0 },
        'liked_by': { type: Schema.Types.ObjectId, ref: 'user.model' }
    }],
    'article_views': { type: Number, default: 0 },
    'article_shares': { type: Number, default: 0 },
    'article_tags': [],
    'isActive': { type: Boolean, default: true },
    'article_comments': [{
        'comment_id': String,
        'comment_by': { type: Schema.Types.ObjectId, ref: 'user.model' },
        'comment': String,
        'comment_reply': [{
            'comment_id': String,
            'comment_by': { type: Schema.Types.ObjectId, ref: 'user.model' },
            'comment': String
        }]
    }],
}));

module.exports = article;
