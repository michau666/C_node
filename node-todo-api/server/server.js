const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

let app = express();

app.listen(3000, () => {
    console.log('Started on port 3000');
});

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(404).send(e) ;
    });
});



/*
let newTodo = new Todo({
    text: 'Have a walk'
});

newTodo.save().then((doc) => {
    console.log('Saved todo ', doc);
}, (e) => {
    console.log('Unable to save todo');
})
*/