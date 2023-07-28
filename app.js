require("dotenv").config();
const express = require("express");
const fs = require("fs");
const port = process.env.PORT || 80;
const app = express();

// mongo Data Base
const mongoose = require("mongoose");
const NewPost = require("./mongoDb/post");  // import mongo model
const NewFeedback = require("./mongoDb/feedback");  // import mongo model

const URL = `${process.env.DATABASE}`;
mongoose
  .connect(URL) // connect mongoose
  .then(() => console.log("Connected!"));

// use of Static folder
app.use("/static", express.static("Client")); // For serving static files
app.use(express.urlencoded());

// import html file for routing

const home = fs.readFileSync("Client/index.html");
const about = fs.readFileSync("Client/about.html");
const post = fs.readFileSync("Client/post.html");
const contact = fs.readFileSync("Client/contact.html");
const admin = fs.readFileSync("Client/admin.html");
const post_defination = fs.readFileSync("Client/post_defination.html");

// -----------------Multer of take image in the data base--------------------

const multer  = require('multer')

let storage = multer.diskStorage({
  destination: 'Client/uploads/',
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`)
    // cb(null, file.originalname)
  }
})

let upload = multer({
  storage: storage
})

//----------------- call for routing----------------------------

// get method

app.get("/", (req, res) => {
  res.send(`${home}`);
});
app.get("/about", (req, res) => {
  res.send(`${about}`);
});
app.get("/post", (req, res) => {
  res.send(`${post}`);
});
app.get("/contact", (req, res) => {
  res.send(`${contact}`);
});
app.get("/admin", (req, res) => {
  res.send(`${admin}`);
});
app.get("/post_defination", (req, res) => {
  res.send(`${post_defination}`);
});
app.get("/gallery", (req, res) => {
  res.send(`
    <body style="display: grid; height: 100vh; place-items: center;">
        <h1 style="font-size: 100px; color: red;">Under Construction</h1>
    </body>
  `);
});
app.get("/devloper", (req, res) => {
  res.send(`
    <body style="display: grid; height: 100vh; place-items: center;">
        <h1 style="font-size: 100px; color: red;">Sav Maine kiya h</h1>
    </body>
  `);
});

// post method

app.post("/contact", async (req, res) => {
  let { name, email, feedback } = req.body;

  try {
    await NewFeedback.create({ name, email, feedback });
    res.redirect("/contact");
  } catch (e) {
    res.send(`
        <h1 style='color: red'> OOPs Your FeedBack doesn't submit.</h1><br>
        <p>Please Try Again after some time... <br> 
        We are trying to resolve it.</p>
        `);
  }
});
app.post("/admin", upload.single('attachedPhoto') ,async (req, res) => {
  let { title, authorName, date, summary, disc} = req.body;
  let img = req.file.filename;
  try {
    await NewPost.create({
      title,
      authorName,
      date,
      summary,
      disc,
      img,
    });
    res.status(200).send(`
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
    
    *{
      font-family: poppins;
    }
    
    a:hover {
      box-shadow: 2px 2px 4px black;
      text-shadow: 0px 0px 2px #00000069;
      transform: scale(1.03);
    }
    </style>
    
    <body style="background: #ccc">
    <h1 style="width: 80%; margin-inline: auto; color: green; text-align: center;"> Upload Successfully! </h1>
    
    <p style="width: 80%;margin-inline: auto; margin-top: 50px; font-size: 1.2rem;"> <b> Title : </b> <span> ${title} </span> </p>
    <p style="width: 80%;margin-inline: auto; font-size: 1.2rem;"> <b> Athor Name : </b> <span> ${authorName} </span> </p>
    <p style="width: 80%;margin-inline: auto; font-size: 1.2rem;"> <b> Date : </b> <span> ${date} </span> </p>
    <p style="width: 80%;margin-inline: auto; font-size: 1.2rem;"> <b> Summary : </b> <span> ${summary} </span> </p>
    <p style="width: 80%;margin-inline: auto; font-size: 1.2rem;"> <b> Discription : </b> <span> ${disc} </span> </p>
    <img style="width: 80%;margin-inline: 40px; font-size: 1.2rem;" src="../static/uploads/${img}" alt="post-image" />
    <p style="width: 80%;margin-inline: auto; font-size: 1.2rem;"> <b> Attached Photo : </b> <span> ${img} </span> </p>
    
          <div style="display: flex; justify-content: space-between; align-items: center; width: 80%; margin-inline: auto; margin-block: 100px;">
          <a href="/admin" style="padding: 0.4em 0.8em;
          font-size: 1.2rem;
          color: green;
          font-weight: 600;
          background-color: transparent;
          border: 2px solid green;
          text-decoration: none;
          transition: all 0.3s ease-out;
          cursor: pointer;"> Back To Admin 
          </a>
          <a href="/" style="padding: 0.4em 0.8em;
          font-size: 1.2rem;
          color: red;
          font-weight: 600;
          background-color: transparent;
          border: 2px solid red;
          text-decoration: none;
          transition: all 0.3s ease-out;
          cursor: pointer;"> Back To Home 
          </a>
          </div>
          </body>
          `);
  } catch (e) {
    res.json(e);
  }
});

// -----------Post data from data base ---------------------

app.post("/PostTemplate", async(req, res) => {
  const ShowPost = await NewPost.find();
  // console.log(ShowPost);
  res.status(200).json(ShowPost);
});





//---------- server start by 'npm run server'-------------------------

app.listen(port, () => {
  console.log(`application is on http://127.0.0.1:${port}`);
});
