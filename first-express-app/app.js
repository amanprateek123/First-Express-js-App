var express = require('express');
var app = express();

app.get("/aman", (req,res) =>res.send("Hello Aman"));

app.listen(process.env.PORT, process.env.IP, function(){
	console.log("server is started");
})
