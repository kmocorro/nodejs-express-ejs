/**
 * Dealing with templates, static files/middleware
 * and dynamic routing using
 * expressjs and ejs node modules
 * 
 */

//look for express module
var express = require('express');
//set app as express function
var app = express();
//set port value
var port = process.env.PORT || 3000;

//let's start with middleware @style.css using use property
app.use('/assets', express.static(__dirname + '/public'));

//use set method for ejs module, we've installed thru npm
//Create folder "view", then "filename.ejs"  
//view engine, then .ejs file extension
app.set('view engine', 'ejs');

//we can now start using get property
app.get('/', function(req,res){
    //now using render method at response, it will process the filename inside the view folder with ejs extension
    res.render('index');
});

//another get property for handling non declared url
app.get('/:id', function(req, res){
    //same process as previous render
    //but, this will have an object to the request 
    res.render('404', { ID: req.params.id });
});

//since this is an event emitter, we need to listen
app.listen(port);