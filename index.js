const express = require("express");
const dotenv = require("dotenv").config();
const path = require("path");

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve("./views"));

app.use(express.json());

app.get("/", (req,res) => {
    return res.render("home");
});

app.listen(process.env.PORT, () => {console.log(`Server listening on PORT ${process.env.PORT}`)});