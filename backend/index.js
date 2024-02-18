const express = require('express');
const bodyParser = require("body-parser");
const momgoose = require("mongoose");

const app = express();

app.use(bodyParser.json());


app.get("/",(req,res)=>{
    res.send("hello")
})

const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`Server is running on port : ${PORT}`);
})
