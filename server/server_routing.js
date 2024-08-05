var express = require("express");
var app = express();

//This responds with "Hello" on the homepage
app.get("/", function(request, response) {
    console.log("There is GET request for the homepage!");
    response.send("Here is the GET Method!");
})

//This responds a POST request for the homepage
app.post("/", function(request, response) {
    console.log("A POST request for the homepage is accessed.");
    response.send("Here is the POST Method");
})

//This responds a GET request for the /list_users page.
app.get('/list_user', function (request,response){
    console.log("Got a GET request  for /list_users page");
    response.send("This is Page Listing");
})

//This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get("/ab*cd", function (request,response){
    console.log("Got a GET request for /ab*cd");
    response.send("Pattern Match Page");
})

app.get("/student_user", function (request,response){
    console.log("Got a GET request for /student_user");
    response.send("Manicdao Katerisse, a Web Dev student.");
})
var server = app.listen(4000, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})