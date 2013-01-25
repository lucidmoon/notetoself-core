var Users = function () {

	var User = require("../models/user.js");
	
 	function _create (data, callback) {
 	    var note = new Note(data);
    	note.save();

    	if (callback) {
    		callback(note);
    	}
	};

	function _find (uid) {
        
	};

	function _del (query, options) {

	};

    // Find or Create a user. Accepts `uid`, `data` and `callback` arguments 
    function _findOrCreate (uid, data, callback) {
        User.findOne({uid: uid}, function (err, user) {
            if (user) {
                if (callback) { callback(user); }
            } else {
                var user = new User();
                user.provider = "twitter";
                user.uid = data.id;
                user.name = data.displayName;
                user.image = data._json.profile_image_url;
                user.save(function(err) {
                    if(err) { throw err; }
                    if (callback) { callback(user); }    
                });
            }
        });
    };

    // Public API
	return {
		create: _create,
		del: _del,
		find: _find,
        findOrCreate: _findOrCreate,
		model: User
	};

}();

module.exports = exports = Users;