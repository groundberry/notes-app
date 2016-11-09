function noteAbbrevTo20() {
  var note = new NoteApp();
  note.createNewNote('Hello, my name is makers student alpha; I love coding and ping pong');
  note.abbrev();
  assert.isTrue(note.sliced[0] === 'Hello, my name is ma');
}

noteAbbrevTo20();

function testCreateNewNote() {
  var noteApp = new NoteApp();
  noteApp.createNewNote('Hello');
  assert.isTrue(noteApp.notes[0] === 'Hello');
}

testCreateNewNote();


function testCreateNewNoteFromForm() {
  var noteApp = new NoteApp();
  
}
