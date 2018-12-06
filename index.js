var express = require('express');
var app = express();
 var showdown = require("showdown");

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


//routes
app.get('/', (req,res) => {
	res.render('home');
});

var port = process.env.PORT || 4000;
app.listen(port, () =>{
	console.log("Server started.....");
});