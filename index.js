const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(__dirname + "/public/"));

app.get("/", function (req, resp){
    resp.sendFile("index.html");
})

app.get("/about", function (req, resp) {
    resp.sendFile(path.join(__dirname, "public", "about.html"));
});


app.listen(3000, function(){
    console.log("listening on port: 3000")
})