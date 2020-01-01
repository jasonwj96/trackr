const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const api = require("./server/routes/api");

const port = 3000;
const app = express();

app.use(express.static(path.join(__dirname, "dist/trackr")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", api);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/trackr/index.html"));
});

app.listen(port, function() {
  console.log("server running on localhost:" + port);
});
