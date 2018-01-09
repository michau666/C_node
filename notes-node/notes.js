console.log('Starting notes.js');

const fs = require('fs');

let fetchNotes = () => {
    try {
        let notesString = fs.readFileSync('notes_data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

let saveNotes = (notes) => {
    fs.writeFileSync('notes_data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    let notes = fetchNotes();
    let note = {
        title, 
        body
    };
    let duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    console.log('Getting all notes');
};

var getNote = (title) => {
    console.log('Get note', title);
};

var removeNote = (title) => {
    console.log('Removing note', title);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};

/*
module.exports.addNote = () => {
    console.log('addNote');
    return 'New note';
}
*/




