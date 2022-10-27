var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  
  if (Object.keys(req.query).length === 0) {
    var x=Math.random();
    res.render('computation', { value: `Math.pow() applied to ${x} is ${Math.pow(x)}`,
    value1: ` Math.sign()  applied to ${x} is ${ Math.sign(x)}` ,
    value2: ` Math.tanh()  applied to ${x} is ${ Math.tanh(x)}` ,
    value2: ` Math.trunc()  applied to ${x} is ${ Math.trunc(x)}`
});
  }
  else{

    for (let a in req.query) {

      console.log(a)

      res.render('computation', { value: `Math.pow() applied to ${req.query[a]} is ${Math.pow(req.query[a])}`,
      value1: `math.sign() applied to ${req.query[a]} is ${Math.sign(req.query[a])}` ,
      value2: `math.tanh() applied to ${req.query[a]} is ${Math.tanh(req.query[a])}`, 
      value3: `math.trunc() applied to ${req.query[a]} is ${Math.trunc(req.query[a])}`
    })

    }
  }


});