const fs = require('fs');

const fetchNotes = () => {
	try{
		let notesString = fs.readFileSync('notes-data.json');
		return JSON.parse(notesString);
	} catch (e) {
		return [];
	}
}

const saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

let addNote = (title, body) => {
	let notes = fetchNotes();
	let note = {
		title,
		body
	};

	let duplicatesNotes = notes.filter((note) => note.title === title);

	if(duplicatesNotes.length === 0){
		notes.push(note);
		saveNotes(notes);
		return note;
	}
};

let readNote = (noteTitle) => {

	let notes = fetchNotes();
	let desiredNote = notes.filter((note) => note.title == noteTitle );
	return desiredNote;

};

let readAllNotes = () => {
	return fetchNotes();
};

let removeNote = (noteTitle) => {

	let notes = fetchNotes();
	let remainingNotes = notes.filter((note) => note.title !== noteTitle );
	saveNotes(remainingNotes);

	return notes.length !== remainingNotes.length;

};


let getAll = () => {
	console.log('getting all notes');
};

module.exports = {
	addNote,
	getAll,
	readAllNotes,
	readNote,
	removeNote
};