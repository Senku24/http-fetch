//Q1] Create a middleware function that logs each
// incoming request’s HTTP method, URL, 
// and timestamp to the console

const express = require('express');
const app = express();
const port = 3000;


// Logger Middleware
function requestLogger(req, res, next) {
    const timestamp = new Date().toISOString();

    console.log(
        `[${timestamp}] ${req.method} ${req.originalUrl}`
    );

    next(); 
}

// Register middleware
app.use(requestLogger);

app.get("/", (req, res) => {
    res.send("Welcome!");
});

app.get("/users", (req, res) => {
    res.send("Users List");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});