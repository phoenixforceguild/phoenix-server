var mongoose = require('mongoose');

var QuestSchema = new mongoose.Schema
({
	name: {type:String, required:true},
	date: {type: Date},
    players: [{type:mongoose.Schema.Types.ObjectId, ref:"Player"}],
    organizer:{type:mongoose.Schema.Types.ObjectId, ref:"Player"},
    location:{type:String}
});

module.exports = mongoose.model("Quest",QuestSchema);