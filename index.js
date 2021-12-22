const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

const routes = require("./Routes/post");

app.use("/post", routes);


// I have used the online version of mongodb atlas

mongoose.connect('' , {
    useNewUrlParser : true , useUnifiedTopology : true
} , () => {
    console.log('db connected');
});

app.get('/' , (req,res,next) =>{
    res.send("Welcome Charchit Gupta");
})

app.listen(3000, () => {
  console.log("App started");
});
