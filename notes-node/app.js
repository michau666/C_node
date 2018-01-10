console.log('Starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
const command = argv._[0];

// console.log('Command:', command);
// console.log('Yargs', argv);


if (command === 'add') {
    let note = notes.addNote(argv.title, argv.body);
    if (note) {
        notes.logNote(note);
        console.log(`Note has been just added!`);
    } else {
        console.log('Title already in use');
    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    let note = notes.getNote(argv.title);
    if (note) {
      notes.logNote(note);
    } else {
      console.log('There is no note with this name, sorry :(');
    }
  
} else if (command === 'remove') {
    let noteRemoved = notes.removeNote(argv.title);
  let message = noteRemoved ? 'Note removed': 'Note not removed';
  console.log(message);
} else {
    console.log('Command not recognized');
}

