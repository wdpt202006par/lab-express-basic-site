const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/home', (request, response) => {
    console.log(request);
    response.send('<h1>Welcome Ironhacker. :)</h1>');
  });

app.get('/about', (request, response) => response.sendFile(__dirname + '/views/about.html'));

app.listen(3005, () => console.log('My first app listening on port 3005! '));

