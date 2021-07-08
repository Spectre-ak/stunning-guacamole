var express = require('express');
var app = express();
var cors = require('cors')
const fetch = require("node-fetch");
const sendResponse = require("./logger");
const mongoDB=require("./mongoDButils");


app.use(cors())
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());


  app.use('/static', express.static(__dirname + '/static'));
  app.use(express.static(__dirname + '/static'));




app.get('/', function (req, res) {
  console.log("get at main page ");
  console.log(req);
  console.log(res);
  res.status(200);
  res.send('Hello World!');

});

app.get("/dataset",function(req,res){
  mongoDB.getChartsData(function(result){
    res.send(result);
  }).catch(console.dir);
});

// app.post('/postData',function(request,response){
//   console.log("post receiverd");
//   //console.log(request);
//   //console.log(response);
//   console.log(JSON.stringify(request.body));
//   console.log(request.body);
//   response.send('cool');
// });



const port = process.env.PORT || 1337;
app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});


fetch("https://s3-ap-southeast-1.amazonaws.com/he-public-data/chart2986176.json").then(response=>response.json()).then(data=>{
  sendResponse.sendResponse(data);
  //inserted data to db
  // mongoDB.dumpDataDB(data,function(res){
  //   console.log(res);
  // });
});