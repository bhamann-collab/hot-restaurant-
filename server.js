var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var app = express();
var port = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var customers = [];
var waitlist = [];

app.get('/', function(req,res) {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/tables', function(req, res) {
	res.sendFile(path.join(__dirname, 'tables.html'));
});

app.get('/reserve', function(req, res) {
	res.sendFile(path.join(__dirname, 'reservation.html'))
});

app.get('/api/tables', function(req, res) {

	return res.json(customers);
});

app.get('/api/waitlist', function(req, res) {

	return res.json(waitlist);
});


var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var port = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var customers = [];
var waitlist = [];

app.get('/', function(req,res) {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/tables', function(req, res) {
	res.sendFile(path.join(__dirname, 'tables.html'));
});

app.get('/reserve', function(req, res) {
	res.sendFile(path.join(__dirname, 'reservation.html'))
});

app.get('/api/tables', function(req, res) {

	return res.json(customers);
});

app.listen(3000)




class Reservation {
    constructor(id, name, email, phone) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}

let myReservation = new Reservation (1234, 'angelo', 'angelo@angelo.com', "04225748");
 