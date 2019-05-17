var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get("/", function(req, res){
  User.find().then(function(user){
    if(user){
      return res.json(user);
    }
    else{
      return res.sendStatus(404);
    }
  });
});

router.get("/:id", function(req, res){
  if(req.params){
    User.findById(req.params.id).then(function(user){
      if(user){
        return res.json(user);
      }
      else{
        return res.sendStatus(404);
      }
    }).catch((err) => {console.log(err);res.sendStatus(400)});
  }
});

router.post("/", function(req,res){
  let newUser = new User(req.body);

  User.save(function(err) {
    if (errr) {
      error.code = err2.code;
      error.message = err2.message;
      //11000: duplicated key
      error.code == 11000 ? res.status(409) : res.status(500);
    }else{
      res.status(201);
      res.send(JSON.stringify(User));
    }
  });
});

module.exports = router;
