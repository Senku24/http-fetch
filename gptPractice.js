const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
let requestCount = 0;
app.use(function(req, res, next) {
    requestCount++;
    next();
});

app.get("/", function(req,res){
    res.send("welcome to server")
})
app.get("/:hello/:name", function(req,res){
    const name = req.params.name;
    res.send(`Hello ${name}`)
})
app.get("/sum/:a/:b", function(req,res){
    const sum = parseInt(req.params.a) + parseInt(req.params.b);
    res.json({ sum: sum });
})
app.get("/stats", function(req,res){
    res.json({ 
        request_Count: requestCount 
    });
})
app.listen(port)