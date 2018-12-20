// var obj = {
// 	name: 'Andrew'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// let personString = '{"name":"Andrew", "age":25}';
// let personObj = JSON.parse(personString);
// console.log(personString);
// console.log(typeof personObj);
// console.log(personObj);

const fs = require('fs');

var originalNote = {
	title: 'Some Title',
	body: 'Some body'
};
let originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

let noteString = fs.readFileSync('notes.json');
let note = JSON.parse(noteString); 
console.log(typeof note);
console.log(note.title);