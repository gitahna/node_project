var express = require('express');

var app = express();

app.get('/',function (req,res){
  res.send('Hello World');

});

app.listen(3000,function(){
  console.log('Server On!');
});


/*
function fizzbuzz() {
    for(i=1;i<100;i++){
      if(i%3 === 0){
        console.log("Fizz"+i);
        }


    }
}
fizzbuzz();
*/
