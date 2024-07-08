require("dotenv").config();
const express = require("express")
const app = express()
const mongoose = require("mongoose");
const path = require('path')

app.use(express.json()); 

const userRoutes = require("./server/routes/user")
const userNotes = require("./server/routes/notes")

mongoose.connect(process.env.dbURL)
  .then(console.log("DB Connected!!"))
  .catch(error => console.log(error));

//CORS middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");  
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");  
  next();
});

app.use('/user', userRoutes)
app.use('/notes', userNotes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started!! Listening on port ${PORT}!!! :)`))