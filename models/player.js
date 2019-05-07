var mongoose = require('mongoose');

var PlayerSchema = new mongoose.Schema
({
    name: {type:String, required:true},
    vocation:{type:String, required:true},
    characters: [{type:String}]
});

module.exports = mongoose.model("Player",PlayerSchema);