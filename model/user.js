var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema
({
	name: {type:String, required:true},
	date: {type: Date},
    characters: [{type:String}]
});

UserSchema.index({name:1});
module.exports = mongoose.model("User",UserSchema);