var express=require('express');
var router = express.Router();

router.get('/',function(req,res,next){

   var number1=Math.random()*20

   var number2=Math.random()

   var number3=Math.floor(Math.random()*20)

   var number4=Math.random()*-10

   var powfunction=Math.pow(number1);

   var signfunction=Math.sign(number2);

   var tanhfunction=Math.tanh(number3);

   var truncfunction=Math.trunc(number4);

   res.render('computation',
   {
     title:'Amrutha varshini computation',

    number1:number1,

    number2:number2,

    number3:number3,

    number4:number4,

    pow:powfunction,

    sign:signfunction,

    tanh:tanhfunction,

    trunc:truncfunction,
   });
  
});

module.exports=router;