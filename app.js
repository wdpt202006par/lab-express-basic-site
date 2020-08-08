const express = require("express");

// We create our own server named app
// Express server will be handling requests and responses
const app = express();

// our first Route
// Make everything inside of public/ available
app.use(express.static("public"));

// our first Route:
app.get("/home", (request, response, next) =>
  response.sendFile(__dirname + "/views/home.html")
);

// about route:
app.get("/about", (request, response, next) =>
  response.sendFile(__dirname + "/views/about.html")
);

// work route:
app.get("/work", (request, response, next) =>
  response.sendFile(__dirname + "/views/work.html")
);

// work route:
app.get("/gallery", (request, response, next) =>
  response.sendFile(__dirname + "/views/gallery.html")
);

// ... the previously added code
// Server Started
app.listen(3000);
