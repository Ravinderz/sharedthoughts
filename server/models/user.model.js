var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = mongoose.model('user', new Schema({
  firstName : String,
  lastName : String,
  email : {type:String, unique : true},
  password : String,
  phone : {type:Number},
  stats : {
      articles_count:{type:Number,default:0},
      popularity_index:{type:Number,default:0},
      authors_following:[]
  },
  isActive : {type:Boolean , default:true},
  profileImage: String,
  interests: [],
  createdTime :  { type : Date, default: Date.now },
  updatedTime :  { type : Date, default: Date.now }
}));

module.exports = User;