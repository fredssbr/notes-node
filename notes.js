const fs = require('fs');
/**
 * MODULE is an object available throughout your nodeJS application
 * The most important attribute we use is exports.
 * Exports is an object which is immediately available to everyone that REQUIREs this module
 * so that you could add properties to exports and access them from outside this module.
 */

var fetchNotes = () => {
    try{
        /**
         * If the file doesn't exist or there is no content inside, 
         * these two lines might throw errors, this is why they're wrapped
         * in a try-catch block.
         */
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    }catch(e){
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

//ES6 - Arrow functions - won't bind the this keyword or the arguments array
 var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    //ES6 - Arrow function with only one statement
    var duplicateNotes = notes.filter((note) => note.title === title);
    if(duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    return fetchNotes();
};

var getNote = (title) => {
    var notes = fetchNotes();
    return notes.filter((note) => note.title === title)[0];
};

var removeNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
    console.log('---');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

//ES6 - Properties with the same name as the value variable can be omitted, like addNote: addNote > addNote
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};