const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const titleCmdConfig = {
	describe: 'Title of the note',
	demand: true, // makes title a necessity for this command
	alias: 't' // a little sort cut to reference title
};
const bodyCmdConfig = {
	describe: "Body of the note",
	demand: true,
	alias: 'b'
};

const argv = yargs
	.command('add', 'Add note', {
		title:titleCmdConfig,
		body:bodyCmdConfig
	})
	.command('list', 'Lists all notes')
	.command('read', 'Lists a selected note', {
		title:titleCmdConfig,
	})
	.command('remove', 'Removes a specific note', {
		title:titleCmdConfig,
	})
	.help() // causes yargs to return a description
	.argv;
let command = process.argv[2];
console.log('Command: ' + command);
console.log('Process: ', process.argv);
console.log('Yargs', argv);


if(command == 'add'){

	let note = notes.addNote(argv.title, argv.body);
	if(note){
		console.log(`Note ${note.title} created`);
	} else if (note === undefined) {
		console.log("Duplicate Note exists");
	}
} else if (command == 'list'){

	let allNotes = notes.readAllNotes();
	console.log(`Number of Notes: ${allNotes.length}`);
	allNotes.forEach((note) => {
		console.log(`Title: ${note.title} Note:${note.body}`);
	});
} else if (command == 'read'){

	let note = notes.readNote(argv.title);
	const message =  (note === undefined || note.length == 0) ? 'Note not found' : note ;
	console.log(message);

} else if (command == 'remove'){

	const noteRemoved = notes.removeNote(argv.title);
	const message = noteRemoved ? 'Note was removed' : 'Note not found';
	console.log(message);

} else {

	console.log('Command not recognized');
}

