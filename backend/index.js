const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose')
const cors =  require('cors')
const TodoModel = require('./Models/Todo')
app.use(cors())
app.use(express.json())


mongoose.connect('mongodb+srv://frontend:g2qWi91XudwbhB2P@mermtodolist.evhpy.mongodb.net/?retryWrites=true&w=majority&appName=MERMTodoList')

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'frontend/dist')));

// Route to serve index.html for "/"
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/dist/index.html'));
});

// Catch-all route to handle React routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/dist/index.html'));
});


app.get('/get',(req,res) => {
    TodoModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))

})
app.post('/add',(req, res) => {
    const task = req.body.task;
    TodoModel.create({
        task:task
    }).then(result => res.json(result))
    .catch(err => res.json(err))
})

app.put('/update/:id', (req, res) => {
    const {id} = req.params;
    TodoModel.findByIdAndUpdate({_id: id}, {done: true})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.delete('/delete/:id', (req, res) => {
    const {id} =req.params;
    TodoModel.findByIdAndDelete({_id:id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
    
})

app.listen(3001,() =>{
    console.log("Server is Running")
})
