export class User {
    firstName : String;
    lastName : String;
    email : String;
    password : String;
    phone : Number;
    stats : {
        articles_count:Number,
        popularity_index:Number,
        authors_following:String[];
    };
    isActive : Boolean;
    profileImage: String;
    interests: String[];
    createdTime : Date;
    updatedTime : Date;
}