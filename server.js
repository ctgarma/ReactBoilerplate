var express = require('express');
const bodyParser= require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static('public'));


app.get('/price/*',(req,res)=>{
  console.log(req.query.symbol);
});

app.listen(3400,()=>{
  console.log('Express server is up on port 3400');
});
