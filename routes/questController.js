var express = require('express');
var router = express.Router();
var Quest = require('../models/quest');


router.get("/", function(req, res){
    var error = {};
	Quest.find({},function(err,doc){
		if(err){
                res.contentType('application/json');
                res.status(500);
                error.code = err.code;
                error.message = err.message;
            }else{
                res.contentType('application/json');
                res.status(200);
                res.send(JSON.stringify({"result":doc, "error":error}));
            }
	});
});

router.get("/:id:", function(req, res){
    var error = {};    
    Quest.findOne({id:req.param.id},function(err,doc){
		if(err){
            res.contentType('application/json');
            res.status(500);
            error.code = err.code;
            error.message = err.message;
        }else if(doc == null){
        	res.contentType('application/json');
            res.status(404);
            error.message="User Not Found";
    	}else{
            res.status(200);
            res.contentType('application/json');
        }
        res.send(JSON.stringify({"result":doc.toObject(), "error":error}));
	});
});

router.post("/", function(req,res){
    let newQuest = new Quest(req.body);

    newQuest.save(function(err) {
        if (errr) {
            error.code = err2.code;
            error.message = err2.message;
            //11000: duplicated key
            error.code == 11000 ? res.status(409) : res.status(500);
        }else{
            res.status(201);}
            res.send(JSON.stringify(newQuest));
    });
});
