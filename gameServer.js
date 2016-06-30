var express = require('express');
var path = require('path');

var app = express();
app.use(express.static(__dirname));

app.get('/', function(err, res) {
	if (err) {
		console.log('error')
	}
	res.sendFile(path.join(__dirname + '/index.html'))
	}
);

var port = process.env.PORT || 4000;
app.listen(port);
console.log("Listening on localhost:" + port);
