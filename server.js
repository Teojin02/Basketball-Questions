// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

// our default array of dreams


// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("src"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/index.html", (request, response) => {
  response.sendFile(__dirname + "/Basketball-Questions/public/index.html");
});

// send the default array of dreams to the webpage
app.get("/dreams", (request, response) => {
  // express helps us take JS objects and send them as JSON
  response.json(dreams);
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
