const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));



const homeData = JSON.parse(fs.readFileSync(path.join(__dirname, "data", "home.json"), "utf-8"));


app.get('/api/home', (req, res)=>{
    res.send(homeData);
})



app.listen(8000, ()=>{
    console.log("app listen on port 8000");
})