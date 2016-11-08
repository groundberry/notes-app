var newNoteApp = function() {
  noteApp = new NoteApp();
};

function saveNote() {
  note = document.getElementById("create-note-text").value;
  noteApp.createNewNote(note);
}
