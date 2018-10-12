var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 8080;

// models
var models = require("./models");

// routes
var books = require('./routes/books');

//Sync Database
models.sequelize.sync().then(function() {
    console.log('connected to database')
}).catch(function(err) {
    console.log(err)
});
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, x-access-token, x-origin, Authorization');
	res.setHeader('Access-Control-Allow-Credentials', true);
	res.setHeader('Access-Control-Expose-Headers', 'totalRecords');
	next();
}); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// register routes
app.use('/books', books);

// index path
app.get('/', function(req, res){
    console.log('app listening on port: '+port);
    res.send('tes express nodejs mysql')
});

app.listen(port, function(){
    console.log('app listening on port: '+port);
});