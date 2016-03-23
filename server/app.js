var express = require('express');
var app = express();
var path = require('path');
var students = require('./public/assets/data/studentData.json'); //grabs the studentData.json file and saves it as students

var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('port', (process.env.PORT || 5000));

app.get('/kappaStudents', function(req,res){
  res.send(students);
});

app.get('/*', function(req, res){
  var file = req.params[0] || "views/index.html";
  res.sendFile(path.join(__dirname, "/public/", file));
});

app.listen(app.get('port'), function(){
  console.log("Up and listening on port :", app.get('port'));
});

module.exports = app;
