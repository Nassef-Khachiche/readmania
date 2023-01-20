const { createServer } = require("http");
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const port = 8080;
const app = express();
const server = createServer(app);

app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: false,
    cookie : {
      //IMPORTANT: comment sameSite en secure weg als je locaal aan het werken bent
      // secure: true,
      // httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24,
    }
}));

//sets up a middleware function so the server can use the json from requests
app.use(bodyParser.json());

//it sets up all the routes with the correct controller
app.use('/', require('./router'));

server.listen(port, () => {
  console.log(`Readmania is live on port ${port}`);
});