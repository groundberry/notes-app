function noteAbbrevTo20() {
  var note = new NoteApp();
  assert.isTrue(note.abbrev <= 20);
}

noteAbbrevTo20();

function testCreateNewNote() {
  var noteApp = new NoteApp();
  noteApp.createNewNote('Hello');
  assert.isTrue(noteApp.notes[0] === 'Hello');
}

testCreateNewNote();
