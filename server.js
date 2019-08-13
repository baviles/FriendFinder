// npm packages 
var express = require("express");
var bodyParser = require ("body-parser");

// set up express basic server 
var app = express();

// initial setup for the listener
var PORT = process.env.PORT || 1234; 

// serup up express to handle data parsing 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes")(app);

require("./app/routing/htmlRoutes")(app);

// listener
app.listen(PORT, function(){
    console.log("App listening on PORT;" + PORT);
}); 


