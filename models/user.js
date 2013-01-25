//     notetoself-core
//     (c) 2012-2013 Matt Richards, Lucidmoon Ltd
//     http://lucidmoon.co.uk
//     -----
//  Mongoose module dependency.
var mongoose = require("mongoose");
//  Define schema for Note model.
var schema = new mongoose.Schema({
    provider: String,
    uid: String,
    image: String,
    name: String,
    email: String,
    password: String,
    dateCreated: {type: Date, default: Date.now, required: true}
});

//  Register Model with mongoose.
mongoose.model('User', schema); 
//  Initialise instance of Note model
var User = mongoose.model('User'); 
module.exports = exports = User;