var express = require('express');

var app = express();

// set up handlebars view engine
var handlebars = require('express3-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.render('home');
});
app.get('/about', function(req, res){
    res.render('about');
});
app.get('/gallery', function(req, res){
    res.render('gallery');
});
app.get('/order', function(req, res){
    res.render('order');
});
app.get('/contact', function(req, res){
    res.render('contact');
});

// 404 catch-all handler
app.use(function(req, res, next){
    res.status(404);
    res.render('404');
});
// 500 error handler
app.use(function(req, res, next){
    console.error(err.stack)
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:'+app.get('port')+'; press Ctrl-C to terminate.');
});
