var mongoose = require("mongoose");
var Schema = mongoose.Schema;



var article =  mongoose.model('article',new Schema({

                'article_id': String,
                'article_title':String,
                'article_date': {type:Date,default:Date.now},
                'article_by':String,
                'article_content':String,
                'article_likes':[{
                    'liked_by':String
                }],
                'article_shares':{type:Number,default:0},
                'article_tag':[],
                'article_comments':[{
                    'comment_id':String,
                    'comment_by':String,
                    'comment':String,
                    'comment_reply':[{
                      'comment_id':String,
                      'comment_by':String,
                      'comment':String
                       }]
                }],

}));

module.exports = article;

/* {
    'userID':"",
    'article':[{
                'article_id':'',
                'article_title':'',
                'article_date':'',
                'article_content':'',
                'article_likes':[{
                    'liked_by':''
                }],
                'article_shares':'',
                'article_tag':'',
                'article_comments':[{
                    'comment_id':'',
                    'comment_by':'',
                    'comment':'',
                    'comment_reply':[{
                      'comment_id':'',
                      'comment_by':'',
                      'comment':''
                       }]
                }],

             }]

    
}; */