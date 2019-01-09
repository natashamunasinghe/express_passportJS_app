const mongoose = require("mongoose");
const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const port = 3000;

app.listen(port, () => console.log(`server is listening on port ${port}`));

app.use(express.urlencoded());
app.use(express.json());

mongoose.connect("mongodb://localhost/digimon", { useNewUrlParser: true });
mongoose.Promise = global.Promise;

mongoose.connection.on("error", err => console.log(err));


module.exports = app;
