const express=require('express')
const router=express.Router()


router.get('/', function(req, res){  res.sendFile(__dirname + "/Our Services.html");  });



    module.exports=router