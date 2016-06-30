var express = require('express');
var path = require('path');

var app = express();

app.use(express.static('/Users/calebanderson/Desktop/OregonFail'));

app.get('/', function(err, res) {
	if (err) {
		console.log('error')
	}
	res.sendFile('/Users/calebanderson/Desktop/OregonFail/index.html')
	}
);

var port = process.env.PORT || 4000;
app.listen(port);
console.log("Listening on localhost:" + port);
