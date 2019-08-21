const user = require('../models/user.model');
const mongojs = require('mongojs');
const mongoose = require('mongoose');
const config = require('../../config');

mongoose.Promise = global.Promise;

exports.register = function (req, res) {
    var host = req.body.host;
    var newUser = new user({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    });

    newUser.save(function (err) {
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
            res.status(200).json({ success: true, message: 'User had been registered successfully' });
        }
    })

};

//authenticate a user
exports.login = function(req, res) {
    console.log(req.body.user.email);
    user.findOne({
        email: req.body.user.email
    }, function(err, user) {
        if (err) throw err;
        if (!user) {
            res.json({ success: false, message: 'Authentication failed! User not found' });
        } else if (user) {

            // check if password matches
            console.log(user);
            console.log(user.email);
            if (user.password != req.body.user.password) {
                res.json({ success: false, message: 'Authentication failed! invalid username and password' });
            } else {

                // if user is found and password is right


                // return the information including token as JSON
                res.status(200).json({
                    success: true,
                    message: 'user login successfull',
                    obj: user
                });
            }
        }
    });
};

//update a user

exports.update_user = function(req,res){
    console.log("inside update user",res.body.user.email);
    user.findOneAndUpdate(
        {"email":req.body.user.email},
        { $set: req.body.user},
        { returnNewDocument: true }
    );
    
}