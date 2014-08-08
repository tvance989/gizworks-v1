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

app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:'+app.get('port')+'; press Ctrl-C to terminate.');
});
