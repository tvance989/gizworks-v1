var express = require('express');
var gallery = require('./lib/gallery.js');

var app = express();

// set up handlebars view engine
var handlebars = require('express3-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next){
    res.locals.showTests = app.get('env')!=='production' && req.query.test==='1';
    next();
});

app.get('/', function(req, res){
    res.render('home');
});
app.get('/about', function(req, res){
    res.render('about', {
        pageTestScript: '/qa/tests-about.js'
    });
});
app.get('/gallery', function(req, res){
    res.render('gallery', {
        projects: gallery.getProjects()
    });
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
