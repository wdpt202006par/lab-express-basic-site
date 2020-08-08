const express = require("express");
const app = express();

// rendre accessible le dossier public 
app.use(express.static('public'));

// faire la route 
app.get('/home', function (request, response, next) {
  response.sendFile(__dirname + "/views/home.html")
})

app.get('/about', function (request, response, next) {
  response.sendFile(__dirname + "/views/about.html")
})

app.get('/works', function (request, response, next) {
  response.sendFile(__dirname + "/views/works.html")
})

// lancer le serveur
app.listen(3000, function(){
  console.log("test")
});

