var express =require('express');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'pug');

app.get('/', function(req,res) {
    res.render('index', {title: 'Index Page', message: 'Hello, this is Index Page!'});
});

app.get('/about', function(req,res) {
    res.render('index', {title: 'About Page', message: 'Hello, this is About Page!'})
});

app.use(express.static(__dirname + '/public'));

//Ошибка 404
app.use(function(req, res) {
    res.status(404);
    res.render('index', {title: '404 Page', message: 'Hello, this is 404 Page!'})
});

//Ошибка 500
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Ошибка сервера');
});

app.listen(app.get('port'), function() {
    console.log('Exptress is runnin on http//localhost' + app.get('port') + '; Press Cntl+C for ending!');
});