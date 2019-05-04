var mongoose = require('mongoose');

var QuestSchema = new mongoose.Schema
({
	name: {type:String, required:true},
	date: {type: Date},
    players: [{type:mongoose.Schema.Types.ObjectId, ref:"User"}],
    organizer:{type:mongoose.Schema.Types.ObjectId, ref:"User"}
});

PersonSchema.index({name:1});
module.exports = mongoose.model("Quest",PersonSchema);