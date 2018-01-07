console.log('Starting app');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

let res = notes.addNote();
let sum = notes.add(10, 24);
console.log(sum);


// fs.appendFileSync('greetings.txt', `Hello ${user}.`);


