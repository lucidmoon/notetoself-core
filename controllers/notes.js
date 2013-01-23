var Notes = function () {

	var Note = require("../models/note.js");
	
 	function _create (data, callback) {
 	    var note = new Note(data);
    	note.save();

    	if (callback) {
    		callback(note);
    	}
	};

	function _find (query, options) {

	};

	function _del (query, options) {

	};

	return {
		create: _create,
		del: _del,
		find: _find,
		model: Note
	};

}();

module.exports = exports = Notes;