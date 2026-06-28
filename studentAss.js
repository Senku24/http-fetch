const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let students = [
    {
        id:1,
        name: "John Doe"
    },{
        id:2,
        name: "Jane Smith"
    }
]

app.get("/students", function(req,res){
    res.json(students);
})
//finder function to get student by id
app.get("/students/:id", function(req,res){
    const id= parseInt(req.params.id);
    const student = students.find(s => s.id === id);
    if(student){
        res.json(student);
    }else{
        res.status(404).json({ error: "Student not found" });
    }
})



app.listen(port, function(){
    console.log(`Server is running on port ${port}`);
});