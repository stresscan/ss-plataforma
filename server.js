var express = require("express");
var app = express();
var path = require("path");

/*xesus*/

app.use(express.static(__dirname + "/dist"));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on port %s", port);
});
