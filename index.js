/*const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});*/

//const for safety o avoid unnessary overriddings
/*

const logger=require('./logger.js');
console.log(logger);

logger.sendResponse("asdddddddddd");


var express = require('express');
var app = express();
app.get('/fsd', function (req, res) {
  res.send('Hello World!');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});   */



/*
const http = require('http');
const server=http.createServer((request,response)=>{
	response.writeHead(200,{"Content-Type":"text/plane"});
	response.end("it works");
});

const port=process.env.PORT||1311;
server.listen(port);
const hostname = 'localhost';
console.log(`Server running at http://${hostname}:${port}/`);
*/


/*
const http = require('http');
const server=http.createServer((request,response)=>{
	response.writeHead(200,{"Content-Type":"text/plane"});
	response.end("it works");
});

const port=process.env.PORT||1311;
server.listen(port);

*/

/*

app.get('/fsd', function (req, res) {
  res.send('Hello World!');
});
var server = app.listen(process.env.PORT||1311, function() {
  console.log('Ready on port %d', server.address().port);
});



const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("<h2>Hello World!</h2>");
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
 
*/

var express = require('express');
var app = express();
var cors = require('cors')
app.use(cors())
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());



app.get('/', function (req, res) {
  console.log("get at main page ");
  console.log(req);
  console.log(res);
  res.status(200);
  res.send('Hello World!');

});

app.post('/postData',function(request,response){
  console.log("post receiverd");
  //console.log(request);
  //console.log(response);
  console.log(JSON.stringify(request.body));
  console.log(request.body);
  response.send('cool');
});

const port = process.env.PORT || 1337;
app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});


const webdriver = require('selenium-webdriver');

  /*

    try {
      let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .usingServer('http://localhost:4444/wd/hub')
    .build();

    await  driver.get("https://www.npmjs.com/package/selenium-webdriver");
     console.log(driver.getPageSource());

    } catch (error) {
      console.log(error);
    }  */




   // var { Readability } = require('@mozilla/readability');
   // var { JSDOM } = require('jsdom');
    /*
    var doc = new JSDOM("<body>Look at this cat: <img src='./cat.jpg'></body>", {
      url: "https://www.example.com/the-page-i-got-the-source-from"
    });
    let reader = new Readability(doc.window.document);
    let article = reader.parse();
    console.log(article);  */


/*

    const {Builder, By, Key, until} = require('selenium-webdriver');
    const chrome = require('selenium-webdriver/chrome');
    let chrome_options = new chrome.Options();
    chrome_options.addArguments("--no-sandbox");
    chrome_options.addArguments("--disable-dev-shm-usage");
    (async function example() {
      let driver = await new webdriver.Builder()
      .forBrowser('chrome')
      .usingServer('http://headlesschromet.azurewebsites.net/wd/hub')
      .withCapabilities(chrome_options)
      .build();
      try {
        await driver.get('https://summerofcode.withgoogle.com/organizations/6154545979195392/');
        
        var doc = new JSDOM(await driver.getPageSource());
        let reader = new Readability(doc.window.document);
        let article =  reader.parse();
        console.log(article.textContent);
      
      
               
        
        console.log("Title is: "+await driver.getTitle());
        console.log();
        console.log((await ( driver.findElement(By.css("body")).getText())));
        
       // console.log((await driver.getPageSource()));
        
      } finally {
        await driver.quit();
      }
    })(); */

    // const {Builder, By, Key, until} = require('selenium-webdriver');
    // const chrome = require('selenium-webdriver/chrome');
    // let chrome_options = new chrome.Options();
    // chrome_options.addArguments("--no-sandbox");
    // chrome_options.addArguments("--disable-dev-shm-usage");
    // (async function example() {
    //   let driver = await new webdriver.Builder()
    //   .forBrowser('chrome')
    //   .usingServer('http://headlesschromet.azurewebsites.net/wd/hub')
    //   .withCapabilities(chrome_options)
    //   .build();
    //   try {
    //     await driver.get("http://wolfstreet.com");
    //     console.log((await ( driver.findElement(By.css("body")).getText())));
        
        
    //   } finally {
    //     await driver.quit();
    //   }
    // })();
