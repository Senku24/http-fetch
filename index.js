//calculator http server 
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", function(req,res){
    res.sendFile("/Users/nixonpaul/Code_learn/WebDev26/http-server/http-re/index.html")
})

app.post("/sum", function(req, res) {
    const a = parseInt(req.body.a); // string 1
    const b = parseInt(req.body.b); // string 2

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
