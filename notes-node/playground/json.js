/*
let obj = {
    name: 'Mike'
};

let stringObj = JSON.stringify(obj);

console.log(typeof stringObj);
console.log(stringObj);

let personString = '{"name": "Mike", "age": 25}';
let person = JSON.parse(personString);

console.log(typeof person);
console.log(person.age);
*/

const fs = require('fs');

// Create object
let originalNote = {
    title: '4HWW',
    body: 'Chapter 1'
}

// Convert to JSON
let originalNoteString = JSON.stringify(originalNote);

// Load to file
fs.writeFileSync('notes.json', originalNoteString);

// Read from file
let notesString = fs.readFileSync('notes.json');

// Convert to object
let notesStringObj = JSON.parse(notesString);

// Present as object
console.log(notesStringObj);



