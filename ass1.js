//Q1] Create a middleware function that logs each
// incoming request’s HTTP method, URL, 
// and timestamp to the console

const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());
app.use( function(req, res, next) {
    const timestamp = new Date().toISOString();
    const method = req.method;
    const url = req.originalUrl;
    req.requestInfo = {
        timestamp: timestamp,
        method: method,
        url: url
    };
    next();
    })

app.get("/", function(req,res){
    res.sendFile("/Users/nixonpaul/Code_learn/WebDev26/http-server/http-re/ass1.html");
})

app.get("/request-info", function(req, res) {
    const requestInfo = req.requestInfo;
    res.json(requestInfo);
});
app.listen(port)











// // Logger Middleware
// function requestLogger(req, res, next) {
//     const timestamp = new Date().toISOString();

//     console.log(
//         `[${timestamp}] ${req.method} ${req.originalUrl}`
//     );

//     next(); 
// }

// // Register middleware
// app.use(requestLogger);

// app.get("/", (req, res) => {
//     res.send("Welcome!");
// });

// app.get("/users", (req, res) => {
//     res.send("Users List");
// });

// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });