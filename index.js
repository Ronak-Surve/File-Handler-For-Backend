const express = require("express");
const dotenv = require("dotenv").config();
const path = require("path");
const multer  = require('multer');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve("./views"));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
      const fileName = `${Date.now()} - ${file.originalname}`;
      cb(null, fileName);
    }
})

const upload = multer({ storage: storage })
  
app.use(express.urlencoded({extended : false}));

app.get("/", (req,res) => {
    return res.render("home");
});

app.post("/upload", upload.single("profileImage"), (req,res) =>  {

        console.log(req.file);
        console.log(req.body);

        return res.redirect("/");
});

app.listen(process.env.PORT, () => {console.log(`Server listening on PORT ${process.env.PORT}`)});