function testCreateNewNote() {
  var noteApp = new NoteApp();
  noteApp.createNewNote('Hello');
  assert.isTrue(noteApp.notes[0] === 'Hello');
}

testCreateNewNote();
