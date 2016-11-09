var newNoteApp = function() {
  noteApp = new NoteApp();
};

function saveNote() {
  note = document.getElementById('create-note-text').value;
  noteApp.createNewNote(note);
  noteApp.abbrev(note);
  document.noteForm.reset();
  displayAbbrevNotes();
}

makeUrlChangeNoteForCurrentPage();

function makeUrlChangeNoteForCurrentPage() {
 window.addEventListener("hashchange", showNoteForCurrentPage);
}

function showNoteForCurrentPage() {
 showNote(getNoteFromUrl(window.location));
}

function getNoteFromUrl(location) {
 return location.hash.split("#")[1];
}

function showNote(note) {
 document
   .getElementById("fullNotes")
   .innerHTML = note;
}
