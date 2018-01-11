const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

let titleOptions = {
  describe: 'title od note',
  demand: true,
  alias: 't'
};

let bodyOptions = {
  describe: 'body od note',
  demand: true,
  alias: 'b'
};

const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions,
  })
  .command('list', 'List all notes')
  .command('read', 'Show a note', {
    title: titleOptions,
  })
  .command('remove', 'Remove a note', {
    title: titleOptions,
  })
  .help()
  .argv;
const command = argv._[0];

if (command === 'add') {
    let note = notes.addNote(argv.title, argv.body);
    if (note) {
        notes.logNote(note);
        console.log(`Note has been just added!`);
    } else {
        console.log('Title already in use');
    }
} else if (command === 'list') {
    let allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s)`);
    allNotes.forEach((note) => notes.logNote(note));
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

