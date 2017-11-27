export class User {
    firstName : String;
    lastName : String;
    email : {type:String, unique : true};
    password : String;
    phone : {type:Number};
    stats : {
        articles_count:{type:Number,default:0},
        popularity_index:{type:Number,default:0},
        authors_following:String[];
    };
    isActive : {type:Boolean , default:true};
    profileImage: String;
    interests: String[];
    createdTime :  { type : Date};
    updatedTime :  { type : Date};
}