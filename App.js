const mongoose = require("mongoose");
const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const port = 3000;


app.use(express.urlencoded());
app.use(express.json());

mongoose.connect("mongodb://localhost/auth", { useNewUrlParser: true });
mongoose.Promise = global.Promise;

mongoose.connection.on("error", err => console.log(err));


//importing routes directory (including index.js file)
app.use(require("./routes"));

//setup port
app.listen(port, () => console.log(`server is listening on port ${port}`));


module.exports = app;
