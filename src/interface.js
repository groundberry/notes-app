var newNoteApp = function() {
  noteApp = new NoteApp();
};

function saveNote() {
  arrayNote = document.getElementById('create-note-text').value;
  noteApp.createNewNote(arrayNote);
  noteApp.abbrevNote(arrayNote);
  document.noteForm.reset();
}

function addLinkNotes() {
  var formNote = doxu
}
