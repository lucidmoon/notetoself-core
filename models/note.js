//     notetoself-core
//     (c) 2012-2013 Matt Richards, Lucidmoon Ltd
//     http://lucidmoon.co.uk
//     -----
//  Mongoose module dependency.
var mongoose = require("mongoose");
//  Define schema for Note model.
var schema = new mongoose.Schema({
    title: {type: String, required: true},
    context: {type: String, required: true},
    selectionText: String,
    pageUrl: {type: String, required: true},
    linkUrl: String, 
    mediaType: {type: String, required: false},
    srcUrl: String,  
    dateCreated: {type: Date, required: true}
});

//  Provide support ID (rather than _ID).
schema.virtual('id')
  .get(function () {
    return this._id.toHexString();
});

//  Register Model with mongoose.
mongoose.model('Note', schema); 
//  Initialise instance of Note model
var Note = mongoose.model('Note'); 

module.exports = exports = Note;