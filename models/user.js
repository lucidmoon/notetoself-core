//     notetoself-core
//     (c) 2012-2013 Matt Richards, Lucidmoon Ltd
//     http://lucidmoon.co.uk
//     -----
//  Mongoose module dependency.
var mongoose = require("mongoose");
//  Define schema for Note model.
var schema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    dateCreated: {type: Date, required: true}
});

//  Provide support ID (rather than _ID).
schema.virtual('id')
  .get(function () {
    return this._id.toHexString();
});

//  Register Model with mongoose.
mongoose.model('User', schema); 
//  Initialise instance of Note model
var User = mongoose.model('User'); 

module.exports = exports = User;