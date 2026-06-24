//calculator http server 
const express = require('express');
const app = express();
const port = 3000;

app.get("/", function(req,res){
    res.sendFile("/Users/nixonpaul/Code_learn/WebDev26/http-server/http-re/index.html")
})

app.get("/sum/:a/:b", function(req,res){
    const a= parseInt(req.params.a);
    const b= parseInt(req.params.b);
    const sum = a + b;
    res.json({
        ans: sum
    })
})
app.get("/sub/:a/:b", function(req,res){
    const a= parseInt(req.params.a);
    const b= parseInt(req.params.b);
    const sub = a - b;
    res.json({
        ans: sub
    })
})
app.get("/mul/:a/:b", function(req,res){
    const a= parseInt(req.params.a);
    const b= parseInt(req.params.b);
    const mul = a * b;
    res.json({
        ans: mul
    })
})
app.get("/div/:a/:b", function(req,res){
    const a= parseInt(req.params.a);
    const b= parseInt(req.params.b);
    const div = a / b;
    res.json({
        ans: div
    })
})

app.listen(port);
