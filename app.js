const express = require('express');

const app = express();
app.use(express.static('public'))

app.get('/home', function(request, response, next) {
	response.sendFile(__dirname + '/views/home.html');
})

app.get('/about', function(request, response, next) {
	response.sendFile(__dirname + '/views/about.html');
})

app.get('/works', function(request, response, next) {
	response.sendFile(__dirname + '/views/works.html');
})

app.get('/photos', function(request, response, next) {
	response.sendFile(__dirname + '/views/photos.html');
})

app.listen(3000, () => console.log('🏃‍ on port 3000'));
